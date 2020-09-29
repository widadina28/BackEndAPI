const { Router } = require('express')
const {
  getDataCompanyByID,
  createCompany,
  putCompany,
  deleteCompany,
  getDataCompany
} = require('../controller/company')
const router = Router()
const { authorizationcomp} = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

router.get('/',authorizationcomp, getDataCompany)
router.get('/:id',authorizationcomp, getDataCompanyByID)
router.post('/',authorizationcomp, uploadImage, createCompany)
router.put('/:id',authorizationcomp, uploadImage, putCompany)
router.delete('/:id',authorizationcomp, deleteCompany)

module.exports = router
