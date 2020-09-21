const {
  getDataPortofolioModel,
  createPortofolioModel,
  putPortofolioModel,
  deletePortofolioModel,
  getDataPortofolioByIDModel
} = require('../models/portofolio')

module.exports = {
  getDataPortofolioByID: (req, res) => {
    const {
      id
    } = req.params
    getDataPortofolioByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data portofolio id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data portofolio ${id} not found`
        })
      }
    })
  },
  createPortofolio: (req, res) => {
    const {
      id_engineer,
      aplication_name,
      link_repo,
      image
    } = req.body
    if (id_engineer && aplication_name && link_repo && image) {
      createPortofolioModel([id_engineer, aplication_name, link_repo, image], result => {
        res.status(201).send({
          success: true,
          message: 'Portofolio data has been created',
          data: req.body
        })
      })
    } else {
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  putPortofolio: (req, res) => {
    const id_portofolio = req.params.id
    const {
      id_engineer,
      aplication_name,
      link_repo,
      image
    } = req.body
    if (id_engineer && aplication_name && link_repo && image) {
      putPortofolioModel([id_engineer, aplication_name, link_repo, image], id_portofolio, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Portofolio with id ${id_portofolio} has been updated`
          })
        } else {
          res.send({
            success: false,
            message: 'Failed to update data!'
          })
        }
      })
    } else {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deletePortofolio: (req, res) => {
    const {
      id
    } = req.params
    deletePortofolioModel(id, result => {
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Item Portofolio id ${id} has been deleted`
        })
      } else {
        res.send({
          success: false,
          message: 'Failed to delete!'
        })
      }
    })
  },
  getDataPortofolio: (req, res) => {
    let {
      page,
      limit
    } = req.query
    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit
    getDataPortofolioModel(limit, offset, result => {
      console.log(result)
            if (result.length) {
        res.send({
          success: true,
          message: 'List Portofolio',
          data: result
        })
      } else {
        res.send({
          success: true,
          message: 'There is no item on list'
        })
      }
    })
  }
}
