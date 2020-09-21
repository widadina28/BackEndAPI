const { Router } = require('express')
const {
  getDataExpertiseByID,
  createExpertise,
  putExpertise,
  deleteExpertise,
  getDataExpertise
} = require('../controller/expertise')
const router = Router()

router.get('/:id', getDataExpertiseByID)
router.post('/', createExpertise)
router.put('/:id', putExpertise)
router.delete('/:id', deleteExpertise)
router.get('/', getDataExpertise)

module.exports = router
