const db = require('../helpers/db')
module.exports = {
  getDataExpertiseByIDModel: (id, cb) => {
    db.query(`SELECT * FROM expertise WHERE id_expertise = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createExpertiseModel: (arr, cb) => {
    const query = `INSERT INTO expertise (id_skill, id_engineer) VALUES('${arr[0]}', '${arr[1]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putExpertiseModel: (arr, id, cb) => {
    db.query(`SELECT * FROM expertise WHERE id_expertise = ${id}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE expertise SET id_skill='${arr[0]}', id_engineer='${arr[1]}' WHERE id_expertise= ${id}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deleteExpertiseModel: (id, cb) => {
    db.query(`SELECT * FROM expertise WHERE id_expertise = ${id}`, (err, results, _field) => {
      if (results.length) {
        db.query(`DELETE FROM expertise WHERE id_expertise = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataExpertiseModel: (limit, offset, cb) => {
    db.query(`SELECT expertise.id_expertise, skill.name_skill, engineer.name_engineer FROM expertise JOIN skill ON expertise.id_skill=skill.id_skill JOIN engineer ON expertise.id_engineer=engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      cb(result)
    })
  }
}
