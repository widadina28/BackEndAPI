const db = require('../helpers/db')
module.exports = {
  getDataEngineerByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM engineer WHERE id_engineer = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createEngineerModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO engineer SET ?', body, (err, result, _field) => {
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
  putEngineerModel: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE engineer SET ? WHERE id_engineer='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteEngineerModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM engineer WHERE id_engineer = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataEngineerModel: (orderKey, searchKey, searchValue, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT engineer.id_engineer, engineer.name_engineer, GROUP_CONCAT(skill.name_skill) AS name_skill, freelance.name_freelance, account.name_account, location.name_loc, engineer.cost, engineer.rate, engineer.description_engineer, engineer.image, engineer.createAt, engineer.updateAt, engineer.status, (SELECT COUNT(*) FROM engineer) as count FROM engineer JOIN expertise ON engineer.id_engineer=expertise.id_engineer JOIN skill ON skill.id_skill=expertise.id_skill JOIN freelance ON freelance.id_freelance=engineer.id_freelance JOIN account ON account.id_account=engineer.id_account JOIN location ON location.id_loc=engineer.id_loc WHERE ${searchKey} LIKE '%${searchValue}%' GROUP BY expertise.id_engineer ORDER BY ${orderKey} DESC LIMIT ${limit}  OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}