import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/greeting', (req, res) => {
  res.send('Hello world!');
});

app.post('/join', (req, res) => {
  console.log(req.body);
  return res.send({ login: 'success' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  return res.send({ login: 'success' });
});

app.listen(5000);
