import Sequelize from 'sequelize';

const connection = new Sequelize('my_places', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default connection;
