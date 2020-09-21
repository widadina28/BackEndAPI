const db = require('../helpers/db')
module.exports = {
  getDataExperienceByIDModel: (id, cb) => {
    db.query(`SELECT * FROM experience WHERE id_experience = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createExperienceModel: (arr, cb) => {
    const query = `INSERT INTO experience (id_engineer, position, company_name, start, end, description) VALUES('${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}', '${arr[4]}', '${arr[5]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putExperienceModel: (arr, id_experience, cb) => {
    db.query(`SELECT * FROM experience WHERE id_experience = ${id_experience}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE experience SET id_engineer='${arr[0]}', position='${arr[1]}', company_name='${arr[2]}', start='${arr[3]}', end='${arr[4]}', description='${arr[5]}' WHERE id_experience= ${id_experience}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deleteExperienceModel: (id, cb) => {
    db.query(`SELECT * FROM experience WHERE id_experience = ${id}`, (err, results, field) => {
      console.log(field)
      if (results.length) {
        db.query(`DELETE FROM experience WHERE id_experience = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataExperienceModel: (limit, offset, cb) => {
    db.query(`SELECT engineer.name_engineer, experience.position, experience.company_name, experience.start, experience.end, experience.description,experience.id_experience FROM experience JOIN engineer ON experience.id_engineer = engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
      console.log(err)
      cb(result)
    })
  }
}
