
module.exports = (sequelize, DataTypes) => {

    const TransitionType = sequelize.define('TransitionTypes', {
        TransitionTypeID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
            primaryKey: true,
            allowNull: false,
        },
        TransitionTypeName: {
            type: DataTypes.STRING,
            allowNull:  false,

        },
        TransitionTypeCode: {
            type: DataTypes.STRING,
            allowNull: false,

        }
        ,Status
        :{
            type:DataTypes.STRING,
            allowNull: false,
        
        }
        
      
    })

    return TransitionType;
}

