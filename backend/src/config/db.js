import Sequelize from 'sequelize';

const connection = new Sequelize('my_places_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default connection;
