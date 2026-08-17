import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', 'dist');
const port = Number(process.env.PORT || 4173);

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
};

async function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]).replace(/\0/g, '');
  const relative = clean.replace(/^\/+/, '');
  const candidate = path.resolve(root, relative);
  if (!candidate.startsWith(root)) return null;

  try {
    const info = await stat(candidate);
    if (info.isFile()) return candidate;
    if (info.isDirectory()) return path.join(candidate, 'index.html');
  } catch {
    // Try clean URL and .html fallbacks below.
  }

  const indexCandidate = path.resolve(root, relative, 'index.html');
  if (indexCandidate.startsWith(root)) {
    try {
      if ((await stat(indexCandidate)).isFile()) return indexCandidate;
    } catch {
      // Continue.
    }
  }

  const htmlCandidate = path.resolve(root, `${relative}.html`);
  if (htmlCandidate.startsWith(root)) {
    try {
      if ((await stat(htmlCandidate)).isFile()) return htmlCandidate;
    } catch {
      // Continue.
    }
  }

  return null;
}

const server = http.createServer(async (request, response) => {
  try {
    const file = (await resolveFile(request.url || '/')) || path.join(root, '404.html');
    const content = await readFile(file);
    response.writeHead(file.endsWith('404.html') ? 404 : 200, {
      'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    response.end(content);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Internal server error');
    console.error(error);
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Capital Generations site: http://127.0.0.1:${port}`);
});
