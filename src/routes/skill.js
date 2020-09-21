const { Router } = require('express')
const {
  getDataSkillByID,
  createSkill,
  putSkill,
  deleteSkill,
  getDataSkill
} = require('../controller/skill')
const router = Router()

router.get('/:id', getDataSkillByID)
router.post('/', createSkill)
router.put('/:id', putSkill)
router.delete('/:id', deleteSkill)
router.get('/', getDataSkill)

module.exports = router
