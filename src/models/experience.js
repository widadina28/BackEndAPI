const db = require('../helpers/db')
module.exports = {
  getDataExperienceByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM experience WHERE id_engineer = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createExperienceModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO experience SET ?', body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          const newResult = {
            id: result.insertId,
            ...body
          }
          resolve(newResult)
        }
      })
    })
  },
  putExperienceModel: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE experience SET ? WHERE id_experience='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteExperienceModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM experience WHERE id_experience = '${id}'`, (err, result, _field) => {
        console.log(err);
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataExperienceModel: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT engineer.name_engineer, experience.position, experience.company_name, experience.start, experience.end, experience.description,experience.id_experience, (SELECT COUNT(*) FROM experience) as count FROM experience JOIN engineer ON experience.id_engineer = engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}
