import express from 'express';
// import passport from 'passport';
// import jwt from 'jsonwebtoken';
// import { validationResult } from 'express-validator/check';
import Place from '../models/place';
// import jwtConfig from '../config/jwt';
// import loginValidator from '../validators/login';
import parsePlaces from '../helpers/parsePlaces';

const router = express.Router();

// passport.authenticate('jwt', { session: false })

router.post('/', async (req, res) => {
  const params = req.body;
  console.log(params);

  const newPlace = await Place.create({
    ...params,
    categories: JSON.stringify(params.categories),
    address: JSON.stringify(params.address),
  });

  res.send(newPlace);
});

router.get('/', async (req, res) => {
  const { id } = req.query;

  const query = id !== 'undefined' ? {
    id
  } : null;

  const places = await Place.findAll({
    where: query,
  });

  parsePlaces(places);

  res.send(places);
});

export default router;
