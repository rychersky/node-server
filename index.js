import express from 'express';

const app = express();

const options = { root: import.meta.dirname };

app.get(['/', '/index'], (req, res) => {
  res.sendFile('index.html', options);
});

app.get('/about', (req, res) => {
  res.sendFile('about.html', options);
});

app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', options);
});

app.get('*', (req, res) => {
  res.sendFile('404.html', options);
});

app.listen(8080);
