const { Router } = require('express')
const {
  getDataAccEngineerByID,
  createAccEngineer,
  putAccEngineer,
  deleteAccEngineer,
  getDataAccEngineer
} = require('../controller/acc_engineer')
const router = Router()

router.get('/:id', getDataAccEngineerByID)
router.post('/', createAccEngineer)
router.put('/:id', putAccEngineer)
router.delete('/:id', deleteAccEngineer)
router.get('/', getDataAccEngineer)

module.exports = router
