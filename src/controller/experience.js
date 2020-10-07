const {
  getDataExperienceModel,
  createExperienceModel,
  putExperienceModel,
  deleteExperienceModel,
  getDataExperienceByIDModel
} = require('../models/experience')

module.exports = {
  getDataExperienceByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataExperienceByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data experience id ${id}`,
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data experience ${id} not found`
      })

    }
  },
  createExperience: async (req, res) => {
    const body = req.body
    try {
      const result = await createExperienceModel(body)
      res.status(201).send({
        success: true,
        message: 'Experience data has been created',
        data: result
      })
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  putExperience: async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      const result = await putExperienceModel(body, id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Project with id ${id} has been updated`
        })
      } else {
        res.send({
          success: false,
          message: 'Failed to update data!'
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteExperience: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteExperienceModel(id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item experience id ${id} has been deleted`
          })
      } else {
        res.send({
              message: 'Data not found!'
            })
      }
    } catch (error) {
      res.send({
        success: false,
        message: 'bad request!'
      })
    }
  },
  getDataExperience: async (req, res) => {
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
    try {
      const result = await getDataExperienceModel(limit, offset)
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List experience',
          // meta: {
          //   totalRows: count,
          //   totalPages: Math.ceil(count / limit),
          //   pageActive: page

          // },
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  }
}
