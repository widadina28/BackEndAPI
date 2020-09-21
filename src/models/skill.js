const db = require('../helpers/db')
module.exports = {
  getDataSkillByIDModel: (id, cb) => {
    db.query(`SELECT * FROM skill WHERE id_skill = ${id}`, (_err, result, _field) => {
      console.log(result)
      cb(result)
    })
  },
  createSkillModel: (arr, cb) => {
    const query = `INSERT INTO skill (name_skill) VALUES('${arr[0]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putSkillModel: (arr, id_skill, cb) => {
    db.query(`SELECT * FROM skill WHERE id_skill = ${id_skill}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE skill SET name_skill='${arr[0]}' WHERE id_skill= ${id_skill}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deleteSkillModel: (id, cb) => {
    db.query(`SELECT * FROM skill WHERE id_skill = ${id}`, (err, results) => {
      if (results.length) {
        db.query(`DELETE FROM skill WHERE id_skill = ${id}`, (_err, result) => {
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataSkillModel: (limit, offset, cb) => {
    db.query(`SELECT * FROM skill LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      cb(result)
    })
  }
}
