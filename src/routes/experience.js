const { Router } = require('express')
const {
  getDataExperienceByID,
  createExperience,
  putExperience,
  deleteExperience,
  getDataExperience
} = require('../controller/experience')
const router = Router()
const { authorizationeng} = require('../middleware/auth')

router.get('/:id',authorizationeng, getDataExperienceByID)
router.post('/',authorizationeng, createExperience)
router.put('/:id',authorizationeng, putExperience)
router.delete('/:id',authorizationeng, deleteExperience)
router.get('/',authorizationeng, getDataExperience)

module.exports = router
