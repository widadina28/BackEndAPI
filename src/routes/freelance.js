const { Router } = require('express')
const {
  getDataFreelanceByID,
  createFreelance,
  putFreelance,
  deleteFreelance,
  getDataFreelance
} = require('../controller/freelance')
const router = Router()
const { authorizationeng} = require('../middleware/auth')

router.get('/:id', authorizationeng, getDataFreelanceByID)
router.post('/', authorizationeng, createFreelance)
router.put('/:id',authorizationeng, putFreelance)
router.delete('/:id',authorizationeng, deleteFreelance)
router.get('/', authorizationeng, getDataFreelance)

module.exports = router
