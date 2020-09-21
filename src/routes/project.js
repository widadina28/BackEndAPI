const { Router } = require('express')
const {
  getDataProjectByID,
  createProject,
  putProject,
  deleteProject,
  getDataProject
} = require('../controller/project')
const router = Router()

router.get('/:id', getDataProjectByID)
router.post('/', createProject)
router.put('/:id', putProject)
router.delete('/:id', deleteProject)
router.get('/', getDataProject)

module.exports = router
