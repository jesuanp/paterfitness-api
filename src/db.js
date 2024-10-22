const { Sequelize, Op } = require('sequelize');

// Importing models
const UserModel = require('./models/User.js');
const UserInfoModel = require('./models/UserInfo.js')

const sequelize = new Sequelize('paterfitness', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    native: false
});

UserModel(sequelize)
UserInfoModel(sequelize)

const connection = async() => {
    try {
        // await sequelize.authenticate();
        await sequelize.sync({force: false})
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const { user, userinfo } = sequelize.models

userinfo.hasOne(user)
user.hasOne(userinfo)

module.exports = {
    sequelize,
    connection,
    Op,
    User: user,
    Userinfo: userinfo
}