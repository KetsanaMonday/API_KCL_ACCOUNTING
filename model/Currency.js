
module.exports = (sequelize, DataTypes) => {

    const Currency = sequelize.define('Currencys', {
        CurrencyID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
            primaryKey: true,
            allowNull: false,
        },
        CurrencyName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        CurrencyCode: {
            type: DataTypes.STRING,
            allowNull: false,

        }
        ,Status
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        }
        
      
    })

    return Currency;
}