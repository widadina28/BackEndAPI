const db = require('../helpers/db')
module.exports = {
  getDataAccCompanyByIDModel: (id, cb) => {
    db.query(`SELECT * FROM account_company WHERE id_acc_company = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createAccCompanyModel: (arr, cb) => {
    const query = `INSERT INTO account_company (name_account, email_company, password_company, name_company, position, createAt, updateAt) VALUES('${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}', '${arr[4]}', '${arr[5]}', '${arr[6]}')`
    db.query(query, (err, result, _field) => {
      console.log(err)
      cb(result)
    })
  },
  putAccCompanyModel: (arr, id, cb) => {
    db.query(`SELECT * FROM account_company WHERE id_acc_company = ${id}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE account_company SET name_account='${arr[0]}', email_company='${arr[1]}', password_company='${arr[2]}', name_company='${arr[3]}', position='${arr[4]}', createAt='${arr[5]}', updateAt='${arr[6]}' WHERE id_acc_company= ${id}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deleteAccCompanyModel: (id, cb) => {
    db.query(`SELECT * FROM account_company WHERE id_acc_company = ${id}`, (err, results, _field) => {
      if (results.length) {
        db.query(`DELETE FROM account_company WHERE id_acc_company = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataAccCompanyModel: (limit, offset, cb) => {
    db.query(`SELECT * FROM account_company LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      cb(result)
    })
  }
}
