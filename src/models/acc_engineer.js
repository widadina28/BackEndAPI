const db = require('../helpers/db')
module.exports = {
  getDataAccEngineerByIDModel: (id, cb) => {
    db.query(`SELECT * FROM account_engineer WHERE id_acc_engineer = ${id}`, (err, result, _field) => {
      if (!err) {
        cb(result)
      }
    })
  },
  createAccEngineerModel: (arr, cb) => {
    const query = `INSERT INTO account_engineer (name_account,
            email_engineer,
            password_engineer,
            phonenum_engineer,
            createAt,
            updateAt) VALUES('${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}', '${arr[4]}', '${arr[5]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putAccEngineerModel: (arr, id_acc_engineer, cb) => {
    db.query(`SELECT * FROM account_engineer WHERE id_acc_engineer = ${id_acc_engineer}`, (err, result, _field) => {
      console.log(result)
      if (result.length) {
        db.query(`UPDATE account_engineer SET name_account='${arr[0]}', email_engineer='${arr[1]}', password_engineer='${arr[2]}', phonenum_engineer='${arr[3]}', createAt='${arr[4]}', updateAt='${arr[5]}' WHERE id_acc_engineer= ${id_acc_engineer}`, (_err, results, _field) => {
          cb(results)
        })
      } else {
        cb(err)
      }
    })
  },
  deleteAccEngineerModel: (id, cb) => {
    db.query(`SELECT * FROM account_engineer WHERE id_acc_engineer = ${id}`, (err, results, _field) => {
      if (results.length) {
        db.query(`DELETE FROM account_engineer WHERE id_acc_engineer = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataAccEngineerModel: (limit, offset, cb) => {
    db.query(`SELECT * FROM account_engineer LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      cb(result)
    })
  }
}
