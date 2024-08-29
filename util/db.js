const Sequelize = require('sequelize')

const sequelize = new Sequelize('alpa_india', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = sequelize ;