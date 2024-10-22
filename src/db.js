const { Sequelize, Op } = require('sequelize');

// Importing models
const UserModel = require('./models/User.js');
const UserInfoModel = require('./models/UserInfo.js')

// const sequelize = new Sequelize('paterfitness', 'paterfitness_user', 'VwWHhPrasrSolwEwtfUTj6ouv3w8yi9m', {
//     host: 'dpg-csbfsk3tq21c739vrgk0-a',
//     dialect: 'postgres',
//     logging: false,
//     port: 5432,
// });

// const sequelize = new Sequelize('postgresql://paterfitness_user:VwWHhPrasrSolwEwtfUTj6ouv3w8yi9m@dpg-csbfsk3tq21c739vrgk0-a:5432/paterfitness', {
//     logging: false
// })

const sequelize = new Sequelize('postgresql://root:Y3fSbljGy6uaL62MqHMthpeKlHrvUmlU@dpg-csbgk5btq21c73a056b0-a/paterfitness_pejp', {
    logging: false,
    dialect: "postgres"
})

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
