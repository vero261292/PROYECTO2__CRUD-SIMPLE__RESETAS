import { DataTypes } from 'sequelize'
//importacion de base de datos
import baseDatosResetas from '../utils/baseDatos.js'

const Resetas = baseDatosResetas.define('reseta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameReseta: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  ingredient1: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  ingredient2: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  ingredient2: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  ingredient4: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  ingredient5: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  ingredient6: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
})

export default Resetas
