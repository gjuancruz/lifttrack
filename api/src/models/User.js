const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
      id:{
          primaryKey: true,
          type: DataTypes.UUID,
          allowNull: false,
          unique: true,
        },
        username:{
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        routines:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
  });
};