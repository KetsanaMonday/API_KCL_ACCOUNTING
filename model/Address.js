
module.exports=(sequelize,DataTypes)=>{
    
    const AccountingType=sequelize.define('AccountingTypes',{
        AccountingTypeID
:{  
    type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,  
        primaryKey: true,
        allowNull: false,
},
AccountTypeName
:{
    type:DataTypes.STRING,
    allowNull: false,

},
AccountTypeCode
:{
    type:DataTypes.STRING,
    allowNull: false,

},
Status
:{
    type:DataTypes.STRING,
    allowNull: false,

},
    })
    return AccountingType;
}