const {
  getDataHireModel,
  createHireModel,
  putHireModel,
  deleteHireModel,
  getDataHireByIDModel
} = require('../models/hire')

module.exports = {
  getDataHireByID: (req, res) => {
    const {
      id
    } = req.params
    getDataHireByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Hire id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Hire ${id} not found`
        })
      }
    })
  },
  createHire: (req, res) => {
    const {
      id_project,
      id_engineer,
      description,
      price,
      status,
      confirm_date,
      createAt,
      updateAt
    } = req.body
    if (id_project && id_engineer && description && price && status && confirm_date && createAt && updateAt) {
      createHireModel([id_project,
        id_engineer,
        description,
        price,
        status,
        confirm_date,
        createAt,
        updateAt], result => {
        res.status(201).send({
          success: true,
          message: 'Hire data has been created',
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
  putHire: (req, res) => {
    const id_hire = req.params.id
    const {
      id_project,
      id_engineer,
      description,
      price,
      status,
      confirm_date,
      createAt,
      updateAt
    } = req.body
    if (id_project && id_engineer && description && price && status && confirm_date && createAt && updateAt) {
      putHireModel([id_project,
        id_engineer,
        description,
        price,
        status,
        confirm_date,
        createAt,
        updateAt], id_hire, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Hire with id ${id_hire} has been updated`
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
  deleteHire: (req, res) => {
    const {
      id
    } = req.params
    deleteHireModel(id, result => {
      if (result === null) {
        res.send({
          message: 'Data not found!'
        })
      } else {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item Hire id ${id} has been deleted`
          })
        }
      }
    })
  },
  getDataHire: (req, res) => {
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
    getDataHireModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Hire',
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
