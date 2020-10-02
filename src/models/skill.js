const db = require('../helpers/db')
module.exports = {
  getDataSkillByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM skill WHERE id_skill = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createSkillModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO skill SET ?', body, (err, result, _field) => {
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
  putSkillModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE skill SET ? WHERE id_skill='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteSkillModel: (id) => {
    return new Promise ((resolve, reject)=> {
      db.query(`DELETE FROM skill WHERE id_skill = '${id}'`, (err, result, _field)=>{
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataSkillModel: (limit, offset) => {
    return new Promise((resolve, reject)=> {
      db.query(`SELECT *, (SELECT COUNT(*) FROM skill) as count FROM skill LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
    
  }
}
