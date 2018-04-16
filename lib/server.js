import express from 'express';
import config from './config';

import { data } from './testData';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {answer:config.port});
});

app.get('/api', (req, res) => {
  res.send(data);
});
app.listen(config.port, function listener() {
  console.info(`Running on ${config.port}`);
});
