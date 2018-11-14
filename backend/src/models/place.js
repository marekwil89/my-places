import Sequelize from 'sequelize';
import connection from '../config/db';

const Place = connection.define('Place', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  categories: {
    type: Sequelize.STRING,
  },
  logo: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  coordinates: {
    type: Sequelize.STRING,
  }
})

export default Place;
