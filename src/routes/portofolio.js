const { Router } = require('express')
const {
  getDataPortofolioByID,
  createPortofolio,
  putPortofolio,
  deletePortofolio,
  getDataPortofolio
} = require('../controller/portofolio')
const router = Router()

router.get('/:id', getDataPortofolioByID)
router.post('/', createPortofolio)
router.put('/:id', putPortofolio)
router.delete('/:id', deletePortofolio)
router.get('/', getDataPortofolio)

module.exports = router
