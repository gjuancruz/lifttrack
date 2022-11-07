const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('routine', {
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercises:{
      type: DataTypes.ARRAY(DataTypes.JSON)
    }
  });
};