const { Router } = require('express')
const {
  getDataExperienceByID,
  createExperience,
  putExperience,
  deleteExperience,
  getDataExperience
} = require('../controller/experience')
const router = Router()

router.get('/:id', getDataExperienceByID)
router.post('/', createExperience)
router.put('/:id', putExperience)
router.delete('/:id', deleteExperience)
router.get('/', getDataExperience)

module.exports = router
