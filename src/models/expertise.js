const db = require('../helpers/db')
module.exports = {
  getDataExpertiseByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM expertise WHERE id_expertise = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createExpertiseModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO expertise SET ?', body, (err, result, _field) => {
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
  putExpertiseModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE expertise SET ? WHERE id_expertise='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteExpertiseModel: (id) => {
    return new Promise ((resolve, reject)=> {
      db.query(`DELETE FROM expertise WHERE id_expertise = '${id}'`, (err, result, _field)=>{
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataExpertiseModel: (limit, offset) => {
    return new Promise ((resolve, reject) => {
      db.query(`SELECT expertise.id_expertise, skill.name_skill, engineer.name_engineer, (SELECT COUNT(*) FROM expertise) as count FROM expertise JOIN skill ON expertise.id_skill=skill.id_skill JOIN engineer ON expertise.id_engineer=engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
    })
  })
}  
}
