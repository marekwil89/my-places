import express from 'express';
import bodyParser from 'body-parser';
import connection from './src/config/db';
import authController from './src/controllers/authController';
import placesController from './src/controllers/placesController';
import cors from 'cors';
import './src/config/passport';

connection.sync();

const app = express();

app.get('/', (req, res) => res.send('default route'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3002'],
  methods: ['GET', 'POST'],
  credentials: true // enable set cookie
}));

app.use('/auth', authController);
app.use('/places', placesController);

app.listen(5000, () => console.log(`app is running`));
