const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
}
