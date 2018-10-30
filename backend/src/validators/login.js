import { check } from 'express-validator/check';

const loginValidator = [
  check('login').isLength({ min: 5 }),
  check('password').isLength({ min: 5 })
]

export default loginValidator;