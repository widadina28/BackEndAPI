const {
  getDataSkillModel,
  createSkillModel,
  putSkillModel,
  deleteSkillModel,
  getDataSkillByIDModel
} = require('../models/skill')

module.exports = {
  getDataSkillByID: (req, res) => {
    const {
      id
    } = req.params
    getDataSkillByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data skill id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data skill ${id} not found`
        })
      }
    })
  },
  createSkill: (req, res) => {
    const {
      name_skill
    } = req.body
    if (name_skill) {
      createSkillModel([name_skill], result => {
        res.status(201).send({
          success: true,
          message: 'Skill data has been created',
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
  putSkill: (req, res) => {
    const id_skill = req.params.id
    const {
      name_skill
    } = req.body
    if (name_skill) {
      putSkillModel([name_skill], id_skill, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Skill with id ${id_skill} has been updated`
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
  deleteSkill: (req, res) => {
    const {
      id
    } = req.params
    deleteSkillModel(id, result => {
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
  getDataSkill: (req, res) => {
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
    getDataSkillModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Skill',
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
