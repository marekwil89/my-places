import Sequelize from 'sequelize';
import connection from '../config/db';

const User = connection.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  }
})

export default User;
