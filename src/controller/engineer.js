const {
  getDataEngineerModel,
  createEngineerModel,
  putEngineerModel,
  deleteEngineerModel,
  getDataEngineerByIDModel
} = require('../models/engineer')

module.exports = {
  getDataEngineerByID: (req, res) => {
    const {
      id
    } = req.params
    getDataEngineerByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Engineer id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Engineer ${id} not found`
        })
      }
    })
  },
  createEngineer: (req, res) => {
    const {
      name_engineer,
      id_freelance,
      id_loc,
      cost,
      rate,
      id_acc_engineer,
      description_engineer,
      image,
      createAt,
      updateAt,
      status
    } = req.body
    if (name_engineer && id_freelance && id_loc && cost && rate && id_acc_engineer && description_engineer && image && createAt && updateAt && status) {
      createEngineerModel([name_engineer, id_freelance, id_loc, cost, rate, id_acc_engineer, description_engineer, image, createAt, updateAt, status], result => {
        res.status(201).send({
          success: true,
          message: 'Experience data has been created',
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
  putEngineer: (req, res) => {
    const id_engineer = req.params.id
    const {
      name_engineer,
      id_freelance,
      id_loc,
      cost,
      rate,
      id_acc_engineer,
      description_engineer,
      image,
      createAt,
      updateAt,
      status
    } = req.body
    if (name_engineer && id_freelance && id_loc && cost && rate && id_acc_engineer && description_engineer && image && createAt && updateAt && status) {
      putEngineerModel([name_engineer, id_freelance, id_loc, cost, rate, id_acc_engineer, description_engineer, image, createAt, updateAt, status], id_engineer, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Engineer with id ${id_engineer} has been updated`
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
  deleteEngineer: (req, res) => {
    const {
      id
    } = req.params
    deleteEngineerModel(id, result => {
      if (result === null) {
        res.send({
          message: 'Data not found!'
        })
      } else {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item Engineer id ${id} has been deleted`
          })
        }
      }
    })
  },
  getDataEngineer: (req, res) => {
    let {
      page,
      limit,
      search,
      order
    } = req.query
    let searchKey = ''
    let searchValue = ''
    let orderKey = ''

    if (typeof order==='object') {
      orderKey = Object.keys(order)[0]
    } else {
      orderKey = 'name_engineer'
    }

    if (typeof search==='object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'name_engineer'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 5
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit
    getDataEngineerModel(orderKey, searchKey, searchValue, limit, offset, result => {
      // console.log(result);
      if (result.length) {
        res.send({
          success: true,
          message: 'List Engineer',
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
