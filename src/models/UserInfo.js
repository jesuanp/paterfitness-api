const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('userinfo', {
        birth: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stature: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        daily_activity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        does_he_do_sports: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sport_frequency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        objective: {
            type: DataTypes.STRING,
        }
    });
}
