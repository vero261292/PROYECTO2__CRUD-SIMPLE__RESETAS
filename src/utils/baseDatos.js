import { Sequelize } from 'sequelize'
import 'dotenv/config'

const baseDatosResetas = new Sequelize({
  server: process.env.BASEDATOSRESETAS_SERVER,
  database: process.env.BASEDATOSRESETAS_DATABASE,
  username: process.env.BASEDATOSRESETAS_USERNAME,
  password: process.env.BASEDATOSRESETAS_PASSWORD,
  dialect: 'postgres',
  port: process.env.BASEDATOSRESETAS_PORT,
})

export default baseDatosResetas
