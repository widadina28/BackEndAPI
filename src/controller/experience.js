const {
  getDataExperienceModel,
  createExperienceModel,
  putExperienceModel,
  deleteExperienceModel,
  getDataExperienceByIDModel
} = require('../models/experience')

module.exports = {
  getDataExperienceByID: (req, res) => {
    const {
      id
    } = req.params
    getDataExperienceByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Experience id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Experience ${id} not found`
        })
      }
    })
  },
  createExperience: (req, res) => {
    const {
      id_engineer,
      position,
      company_name,
      start,
      end,
      description
    } = req.body
    if (id_engineer && position && company_name && start && end && description) {
      createExperienceModel([id_engineer, position, company_name, start, end, description], result => {
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
  putExperience: (req, res) => {
    const id_experience = req.params.id
    const {
      id_engineer,
      position,
      company_name,
      start,
      end,
      description
    } = req.body
    if (id_engineer && position && company_name && start && end && description) {
      putExperienceModel([id_engineer, position, company_name, start, end, description], id_experience, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Experience with id ${id_experience} has been updated`
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
  deleteExperience: (req, res) => {
    const {
      id
    } = req.params
    deleteExperienceModel(id, result => {
      if (result === null) {
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
  getDataExperience: (req, res) => {
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
    getDataExperienceModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Experience',
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
