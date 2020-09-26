const { Router } = require('express')
const {
  getDataProjectByID,
  createProject,
  putProject,
  deleteProject,
  getDataProject
} = require('../controller/project')
const router = Router()
const { authorizationcomp} = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

router.get('/:id',authorizationcomp, getDataProjectByID)
router.post('/',authorizationcomp, uploadImage, createProject)
router.put('/:id',authorizationcomp, putProject)
router.delete('/:id',authorizationcomp, deleteProject)
router.get('/',authorizationcomp, getDataProject)

module.exports = router
