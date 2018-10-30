import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator/check';
import User from '../models/user';
import jwtConfig from '../config/jwt';
import loginValidator from '../validators/login';

const router = express.Router();

router.post('/login', loginValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }

  // passport.authenticate('login', async (err, user) => {

  //   if (err) {
  //     return res.send(err);
  //   }

  //   req.login(user, { session: false }, (err) => {
  //     const token = jwt.sign(user.toJSON(), jwtConfig.secret, { expiresIn: '12000s' });

  //     return res.send({
  //       token: `bearer ${token}`,
  //       user,
  //     });
  //   });
  // })(req, res);
});

router.post('/register', async (req, res) => {
  passport.authenticate('register', async (err, user) => {
    if (err) {
      return res.send(err);
    }

    const newUser = await User.create(user);

    req.login(newUser, { session: false }, (err) => {
      const token = jwt.sign(newUser.toJSON(), jwtConfig.secret, { expiresIn: '12000s' });

      return res.send({
        token: `bearer ${token}`,
        user: newUser,
      });
    });
  })(req, res);
});

router.get('/loged', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const user = req.user;
  res.send({user});
});

export default router;
