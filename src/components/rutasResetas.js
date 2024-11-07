import { Router } from 'express'
import {
  postResetas,
  allGetResetas,
  deleteReseta,
  putReseta,
  getResetaId,
} from './controllerResetas.js'

const router = Router()

router.get('/resetas', allGetResetas)
router.post('/resetas', postResetas)
router.delete('/resetas/:id', deleteReseta)
router.get('/resetas/:id', getResetaId)
router.put('/resetas/:id', putReseta)

export default router
