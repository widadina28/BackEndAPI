const { Router } = require('express')
const {
  getDataExpertiseByID,
  createExpertise,
  putExpertise,
  deleteExpertise,
  getDataExpertise
} = require('../controller/expertise')
const router = Router()
const { authorizationeng} = require('../middleware/auth')

router.get('/:id', getDataExpertiseByID)
router.post('/',authorizationeng, createExpertise)
router.put('/:id',authorizationeng, putExpertise)
router.delete('/:id',authorizationeng, deleteExpertise)
router.get('/', getDataExpertise)

module.exports = router
