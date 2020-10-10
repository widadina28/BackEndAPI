const { Router } = require('express')
const {
  getDataProjectByID,
  createProject,
  putProject,
  deleteProject,
  getDataProject,
  getProjectbyIDCompany
} = require('../controller/project')
const router = Router()
const { authorizationcomp} = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

router.get('/company/:id' ,authorizationcomp, getProjectbyIDCompany)
router.get('/:id',authorizationcomp, getDataProjectByID)
router.post('/',authorizationcomp, uploadImage, createProject)
router.put('/:id',authorizationcomp,uploadImage, putProject)
router.delete('/:id',authorizationcomp, deleteProject)
router.get('/',authorizationcomp, getDataProject)

module.exports = router
