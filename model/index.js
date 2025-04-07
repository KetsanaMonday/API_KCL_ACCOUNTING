const dbConfig=require('../config/db');
const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            idle:dbConfig.pool.idle,
            acquire:dbConfig.pool.acquire,
            
        }    }

            
)
sequelize.authenticate().then(()=>{
    console.log("connect");

}).catch((err)=>{
    console.log("Eror:"+err);

})
const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.AccountingType=require('./AccountingType')(sequelize,DataTypes);

db.sequelize.sync({force:false}).then(()=>{
    console.log('yes re-sync done!');
})
module.exports=db