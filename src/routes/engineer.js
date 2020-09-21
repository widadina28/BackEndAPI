const { Router } = require('express')
const {
  getDataEngineerByID,
  createEngineer,
  putEngineer,
  deleteEngineer,
  getDataEngineer
} = require('../controller/engineer')
const router = Router()

router.get('/:id', getDataEngineerByID)
router.post('/', createEngineer)
router.put('/:id', putEngineer)
router.delete('/:id', deleteEngineer)
router.get('/', getDataEngineer)

module.exports = router
