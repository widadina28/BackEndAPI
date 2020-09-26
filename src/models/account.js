const db = require('../helpers/db')


module.exports = {
  postAccountModel: (setData) => {
    return new Promise ((resolve, reject)=>{
      db.query('INSERT INTO account SET ?', setData, (error, result)=>{
        if(error) {
          reject(new Error(error))
        } else {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          delete newResult.password
          resolve(newResult)
        }
      })
    })
  },
  checkAccountModel: (email) => {
    return new Promise ((resolve, reject)=>{
      db.query('SELECT  id_account, name_account, email_account, password, role FROM account WHERE email_account =?', email, (error, result)=>{
        console.log(result);
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}