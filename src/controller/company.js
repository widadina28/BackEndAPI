const {
  getDataCompanyByIDModel,
  createCompanyModel,
  putCompanyModel,
  deleteCompanyModel,
  getDataCompanyModel
} = require('../models/company')

module.exports = {
  getDataCompanyByID: (req, res) => {
    const {
      id
    } = req.params
    getDataCompanyByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data company id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data company ${id} not found`
        })
      }
    })
  },
  createCompany: (req, res) => {
    const {
      name,
      field,
      loc,
      desc,
      instagram,
      telp,
      linked,
      image,
      createAt,
      updateAt,
      id_acc_company
    } = req.body
    if (name && field && loc && desc && instagram && telp && linked && image && createAt && updateAt && id_acc_company) {
      createCompanyModel([name, field, loc, desc, instagram, telp, linked, image, createAt, updateAt, id_acc_company], result => {
        res.status(201).send({
          success: true,
          message: 'Company data has been created',
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
  putCompany: (req, res) => {
    const id_company = req.params.id
    const {
      name_company,
      field,
      id_loc,
      description_company,
      instagram_company,
      telp_company,
      linkedin_company,
      image,
      createAt,
      updateAt,
      id_acc_company
    } = req.body
    if (name_company && field && id_loc && description_company && instagram_company && telp_company && linkedin_company && image && createAt && updateAt && id_acc_company) {
      putCompanyModel([name_company, field, id_loc, description_company, instagram_company, telp_company, linkedin_company, image, createAt, updateAt, id_acc_company], id_company, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Project with id ${id_company} has been updated`
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
  deleteCompany: (req, res) => {
    const {
      id
    } = req.params
    deleteCompanyModel(id, result => {
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
  getDataCompany: (req, res) => {
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
    getDataCompanyModel(limit, offset, result => {
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List company',
          meta: {
            totalRows: count,
            totalPages: Math.ceil(count / limit),
            pageActive: page

          },
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
