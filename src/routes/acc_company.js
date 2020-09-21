const { Router } = require('express')
const {
  getDataAccCompanyByID,
  createAccCompany,
  putAccCompany,
  deleteAccCompany,
  getDataAccCompany
} = require('../controller/acc_company')
const router = Router()

router.get('/:id', getDataAccCompanyByID)
router.post('/', createAccCompany)
router.put('/:id', putAccCompany)
router.delete('/:id', deleteAccCompany)
router.get('/', getDataAccCompany)

module.exports = router
