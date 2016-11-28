import express from 'express';

const port = 3000;
const app = express();

app.use('*', (req, res, next) => {
  console.log('Set up breakpoint here and...');
  res.send('Change this line in Live Edit mode');
});

const server = app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
