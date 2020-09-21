const { Router } = require('express')
const {
  getDataFreelanceByID,
  createFreelance,
  putFreelance,
  deleteFreelance,
  getDataFreelance
} = require('../controller/freelance')
const router = Router()

router.get('/:id', getDataFreelanceByID)
router.post('/', createFreelance)
router.put('/:id', putFreelance)
router.delete('/:id', deleteFreelance)
router.get('/', getDataFreelance)

module.exports = router
