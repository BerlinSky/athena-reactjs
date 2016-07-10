import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../dist'), {
  dotfiles: 'ignore',
  index: false
}));

app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)

  const dist = path.join(__dirname, '../dist');
  console.log('dist', dist);

  res.sendFile(path.resolve(dist, 'index.html'));
});

app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});

const port = 3000;
app.listen(port);

console.log('Server is listening to: localhost:' + port);

