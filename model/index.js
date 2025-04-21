const dbConfig = require('../config/db');
const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            idle: dbConfig.pool.idle,
            acquire: dbConfig.pool.acquire,

        }
    }


)

sequelize.authenticate().then(() => {
    console.log("connect");

}).catch((err) => {
    console.log("Eror:" + err);

})


const AccountingType = require('./AccountingType')(sequelize, DataTypes);
const AccountingGroup = require('./AccountingGroup')(sequelize, DataTypes);
const AccountingGroupDetail = require('./AccountingGroupDetail')(sequelize, DataTypes);
const Accounting = require('./Accounting')(sequelize, DataTypes);
const AccountingActivity = require('./AccountingActivity')(sequelize, DataTypes);
const Currency = require('./Currency')(sequelize, DataTypes);

sequelize.sync({
    force: true  
}).then(() => {
    console.log('yes re-sync done!');
    
})

const User = sequelize.define('user', { name: DataTypes.STRING }, { timestamps: false });
const Task = sequelize.define('task', { name: DataTypes.STRING }, { timestamps: false });
const Tool = sequelize.define(
  'tool',
  {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
  },
  { timestamps: false },
);
User.hasMany(Task);
Task.belongsTo(User);
User.hasMany(Tool, { as: 'Instruments' });

AccountingType.hasMany(AccountingGroup,{
    foreignKey: 'AccountingTypeID',
    sourceKey: 'AccountingTypeID'
});
AccountingGroup.belongsTo(AccountingType,{
    foreignKey: 'AccountingTypeID',
    targetKey: 'AccountingTypeID'
});
AccountingGroup.hasMany(AccountingGroupDetail,{
    foreignKey: 'AccountingGroupID',
    sourceKey: 'AccountingGroupID'
});
AccountingGroupDetail.belongsTo(AccountingGroup,{
    foreignKey: 'AccountingGroupID',
    targetKey: 'AccountingGroupID'
});
AccountingGroupDetail.hasMany(Accounting,{
    foreignKey: 'AccountingGroupDetailID',
    sourceKey: 'AccountingGroupDetailID'
});
Accounting.belongsTo(AccountingGroupDetail,{
    foreignKey: 'AccountingGroupDetailID',
    targetKey: 'AccountingGroupDetailID'
});
Accounting.hasMany(AccountingActivity,{
    foreignKey: 'AccountingID',
    sourceKey: 'AccountingID'
});
AccountingActivity.belongsTo(Accounting,{
    foreignKey: 'AccountingID',
    targetKey: 'AccountingID'
});
Currency.hasMany(AccountingActivity,{
    foreignKey: 'CurrencyID',
    sourceKey: 'CurrencyID'
});
AccountingActivity.belongsTo(Currency,{
    foreignKey: 'CurrencyID',
    targetKey: 'CurrencyID'
});
module.exports = {AccountingType,AccountingGroup,AccountingGroupDetail,Accounting,User,Task,Tool};