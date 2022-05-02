import { Router } from 'express'
import { getAll, create, remove } from '../controllers/servers.js'
const router = Router()

router.get('/api/server', getAll)

router.post('/api/server', create)

router.delete('/api/server/:id', remove)

/* Обновление значений
router.put()
router.patch()
*/

export default router
