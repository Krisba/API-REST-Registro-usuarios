const  DataTypes  = require('sequelize');

const db = require("../database/dbConnection");
const sequelize = db.sequelize;

const Usuario = sequelize.define(
  'Usuario',
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false 
  });
  
  
module.exports = Usuario  