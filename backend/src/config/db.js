import Sequelize from 'sequelize';

const connection = new Sequelize('question_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default connection;
