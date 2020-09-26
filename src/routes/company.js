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

router.get('/',authorizationcomp, getDataCompany)
router.get('/:id',authorizationcomp, getDataCompanyByID)
router.post('/',authorizationcomp, createCompany)
router.put('/:id',authorizationcomp, putCompany)
router.delete('/:id',authorizationcomp, deleteCompany)

module.exports = router
