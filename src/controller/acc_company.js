const {
  getDataAccCompanyModel,
  createAccCompanyModel,
  putAccCompanyModel,
  deleteAccCompanyModel,
  getDataAccCompanyByIDModel
} = require('../models/acc_company')

module.exports = {
  getDataAccCompanyByID: (req, res) => {
    const {
      id
    } = req.params
    getDataAccCompanyByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Company Account id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Company Account ${id} not found`
        })
      }
    })
  },
  createAccCompany: (req, res) => {
    const {
      name_account,
      email_company,
      password_company,
      name_company,
      position,
      createAt,
      updateAt
    } = req.body
    if (name_account && email_company && password_company && name_company && position && createAt && updateAt) {
      createAccCompanyModel([name_account, email_company, password_company, name_company, position, createAt, updateAt], result => {
        res.status(201).send({
          success: true,
          message: 'Company Account data has been created',
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
  putAccCompany: (req, res) => {
    const id_acc_company = req.params.id
    const {
      name_account,
      email_company,
      password_company,
      name_company,
      position,
      createAt,
      updateAt
    } = req.body
    if (name_account && email_company && password_company && name_company && position && createAt && updateAt) {
      putAccCompanyModel([name_account, email_company, password_company, name_company, position, createAt, updateAt], id_acc_company, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Company Account with id ${id_acc_company} has been updated`
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
  deleteAccCompany: (req, res) => {
    const {
      id
    } = req.params
    deleteAccCompanyModel(id, result => {
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
  getDataAccCompany: (req, res) => {
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
    getDataAccCompanyModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Company Account',
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
