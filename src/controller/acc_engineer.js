const {
  getDataAccEngineerModel,
  createAccEngineerModel,
  putAccEngineerModel,
  deleteAccEngineerModel,
  getDataAccEngineerByIDModel
} = require('../models/acc_engineer')

module.exports = {
  getDataAccEngineerByID: (req, res) => {
    const {
      id
    } = req.params
    getDataAccEngineerByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Engineer Account id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Engineer Account ${id} not found`
        })
      }
    })
  },
  createAccEngineer: (req, res) => {
    const {
      name_account,
      email_engineer,
      password_engineer,
      phonenum_engineer,
      createAt,
      updateAt
    } = req.body
    if (name_account && email_engineer && password_engineer && phonenum_engineer && createAt && updateAt) {
      createAccEngineerModel([name_account, email_engineer, password_engineer, phonenum_engineer, createAt, updateAt], result => {
        res.status(201).send({
          success: true,
          message: 'Engineer account data has been created',
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
  putAccEngineer: (req, res) => {
    const id_acc_engineer = req.params.id
    const {
      name_account,
      email_engineer,
      password_engineer,
      phonenum_engineer,
      createAt,
      updateAt
    } = req.body
    if (name_account && email_engineer && password_engineer && phonenum_engineer && createAt && updateAt) {
      putAccEngineerModel([name_account, email_engineer, password_engineer, phonenum_engineer, createAt, updateAt], id_acc_engineer, result => {
        if (result === null) {
          res.send({
            success: false,
            message: 'Failed to update data!'
          })
        }else {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Engineer Account with id ${id_acc_engineer} has been updated`
            })
          } else {
            res.send({
              success: false,
              message: 'Failed to update data!'
            })
          }
        }
      })
    } else {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteAccEngineer: (req, res) => {
    const {
      id
    } = req.params
    deleteAccEngineerModel(id, result => {
      if (result === null) {
        res.send({
          message: 'Data not found!'
        })
      } else {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item skill id ${id} has been deleted`
          })
        }
      }
    })
  },
  getDataAccEngineer: (req, res) => {
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
    getDataAccEngineerModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Engineer Account',
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
