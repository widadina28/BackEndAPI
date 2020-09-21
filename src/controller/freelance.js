const {
  getDataFreelanceModel,
  createFreelanceModel,
  putFreelanceModel,
  deleteFreelanceModel,
  getDataFreelanceByIDModel
} = require('../models/freelance')

module.exports = {
  getDataFreelanceByID: (req, res) => {
    const {
      id
    } = req.params
    getDataFreelanceByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Freelance id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Freelance ${id} not found`
        })
      }
    })
  },
  createFreelance: (req, res) => {
    const {
      name_freelance
    } = req.body
    if (name_freelance) {
      createFreelanceModel([name_freelance], result => {
        res.status(201).send({
          success: true,
          message: 'Freelance data has been created',
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
  putFreelance: (req, res) => {
    const id_freelance = req.params.id
    const {
      name_freelance
    } = req.body
    if (name_freelance) {
      putFreelanceModel([name_freelance], id_freelance, result => {
        console.log(result)
                if (result.affectedRows) {
          res.send({
            success: true,
            message: `Freelance with id ${id_freelance} has been updated`
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
  deleteFreelance: (req, res) => {
    const {
      id
    } = req.params
    deleteFreelanceModel(id, result => {
      if (result == null) {
        res.send({
          message: 'Data not found!'
        })
      } else {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item experience id ${id} has been deleted`
          })
        }
      }
    })
  },
  getDataFreelance: (req, res) => {
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
    getDataFreelanceModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Freelance',
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
