import { where } from 'sequelize'
import Resetas from '../models/recetasModel.js'

const allGetResetas = async (req, res) => {
  //obtener todos los registros
  try {
    const { body } = req
    const resetas = await Resetas.findAll(body)
    res.status(200).json(resetas)
  } catch (error) {
    res.status(400).json(error)
  }
}

const postResetas = async (req, res) => {
  //crear un nuevo recurso
  try {
    const { body } = req
    const resetas = await Resetas.create(body)
    res.status(201).json(resetas)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getResetaId = async (req, res) => {
  // obtener un recurso por su :ID
  try {
    const { id } = req.params
    const { body } = req
    const reseta = await Resetas.findOne(body, {
      where: { id },
    })
    res.status(200).json(reseta)
  } catch (error) {
    res.status(400).json(error)
  }
}

const putReseta = async (req, res) => {
  //actualizar un recurso por su :ID
  try {
    const { id } = req.params
    const { body } = req
    const reseta = await Resetas.update(body, {
      where: { id },
    })
    res.status(200).json(reseta)
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteReseta = async (req, res) => {
  //eliminar un recurso
  try {
    const { id } = req.params
    await Resetas.destroy({
      where: { id },
    })
    res.status(201).end()
  } catch (error) {
    res.status(400).json(error)
  }
}

export { allGetResetas, postResetas, deleteReseta, putReseta, getResetaId }
