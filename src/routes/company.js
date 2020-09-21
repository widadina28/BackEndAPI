const { Router } = require('express')
const {
  getDataCompanyByID,
  createCompany,
  putCompany,
  deleteCompany,
  getDataCompany
} = require('../controller/company')
const router = Router()

router.get('/', getDataCompany)
router.get('/:id', getDataCompanyByID)
router.post('/', createCompany)
router.put('/:id', putCompany)
router.delete('/:id', deleteCompany)

module.exports = router
