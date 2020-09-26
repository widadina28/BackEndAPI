const { Router } = require('express')
const {
  getDataEngineerByID,
  createEngineer,
  putEngineer,
  deleteEngineer,
  getDataEngineer
} = require('../controller/engineer')
const router = Router()
const { authorizationeng} = require('../middleware/auth')

router.get('/:id', authorizationeng, getDataEngineerByID)
router.post('/', authorizationeng, createEngineer)
router.put('/:id',authorizationeng, putEngineer)
router.delete('/:id',authorizationeng, deleteEngineer)
router.get('/',authorizationeng, getDataEngineer)

module.exports = router
