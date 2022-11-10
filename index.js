const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
  }).catch ((error) => {
    console.error('Unable to connect to the database:', error);
  })
var initModels = require("./models/init-models");
var models = initModels(sequelize);
models.viber_bot_user.findAll({}).then((viber_bot_user) => {
  fs.writeFileSync(path.resolve(__dirname, 'viber_bot_user.json'), JSON.stringify(viber_bot_user, null, 2));
  console.log('donewriting')
}).catch ((error) => {
  console.error('error fetching data', error)
})