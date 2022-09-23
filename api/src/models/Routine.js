const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('routine', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
    },
  });
};