import express from 'express'
import baseDatosResetas from './utils/baseDatos.js'
import router from './components/rutasResetas.js'

const app = express()
const PORT = 3000

baseDatosResetas
  .sync() // sincronizacion ha base de datos
  .then(console.log('base de datos sincronizada')) // sincronizacion de base de datos
  .catch(err => console.log(err))

baseDatosResetas
  .authenticate() //authenticacion  de base de datos
  .then(console.log('coneccion correcta'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  console.log('OK')
})

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`)
})
