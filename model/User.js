const {Model,DataTypes,Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
class User extends Model {}

User.init({
    UserID: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
        allowNull: false
    },
    UserName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
});
module.exports = User;