import Sequelize from 'sequelize';

const connection = new Sequelize('my_places_db2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default connection;
