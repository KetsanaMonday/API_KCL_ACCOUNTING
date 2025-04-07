
module.exports=(sequelize,DataTypes)=>{

    const AccountingType=sequelize.define('AccountingType',{
        AccountingTypeID
:{  
    type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,  
    unique: true,
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
    })
    return AccountingType;
}