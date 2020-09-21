const {
  getDataExpertiseModel,
  createExpertiseModel,
  putExpertiseModel,
  deleteExpertiseModel,
  getDataExpertiseByIDModel
} = require('../models/expertise')

module.exports = {
  getDataExpertiseByID: (req, res) => {
    const {
      id
    } = req.params
    getDataExpertiseByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Expertise id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Expertise ${id} not found`
        })
      }
    })
  },
  createExpertise: (req, res) => {
    const {
      id_skill,
      id_engineer
    } = req.body
    if (id_skill && id_engineer) {
      createExpertiseModel([id_skill, id_engineer], result => {
        res.status(201).send({
          success: true,
          message: 'Expertise data has been created',
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
  putExpertise: (req, res) => {
    const id_expertise = req.params.id
    const {
      id_skill,
      id_engineer
    } = req.body
    if (id_skill && id_engineer) {
      putExpertiseModel([id_skill, id_engineer], id_expertise, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Expertise with id ${id_skill} has been updated`
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
  deleteExpertise: (req, res) => {
    const {
      id
    } = req.params
    deleteExpertiseModel(id, result => {
      if (result === null) {
        res.send({
          message: 'Data not found!'
        })
      } else {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item Project id ${id} has been deleted`
          })
        }
      }
    })
  },
  getDataExpertise: (req, res) => {
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
    getDataExpertiseModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Expertise',
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
