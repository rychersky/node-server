import http from 'node:http';
import fs from 'node:fs/promises';

function getFilename(url) {
  return url === '/' || url === '/index'
    ? 'index.html'
    : url === '/about'
    ? 'about.html'
    : url === '/contact-me'
    ? 'contact-me.html'
    : '404.html';
}

http
  .createServer(async (req, res) => {
    const filename = getFilename(req.url);
    try {
      const file = await fs.readFile(filename);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    } catch (e) {
      console.error(e);
    }
  })
  .listen(8080);
