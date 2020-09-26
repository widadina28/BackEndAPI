const {postAccountModel, checkAccountModel} = require('../models/account')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports={
  registerAccount: async (req, res) => {
    const {name_account, email_account, password, role} = req.body
    const salt = bcrypt.genSaltSync(10)
    const encryptPass = bcrypt.hashSync(password, salt)
    const setData = {
      name_account,
      email_account,
      password: encryptPass,
      role,
      createAT: new Date()
    } 
    try{
      const emailUnique = await checkAccountModel(email_account)
      if (emailUnique.length >=1) {
        res.send({
          success: false,
          message: 'Email has been registered!'
        })
      } else {
        const result = await postAccountModel(setData)
     
      res.send({
        success: true,
        message: 'Success Register Account!',
        data: result
      })
      }
      
    } catch (error) {
      res.status(400).send({
        success: false,
        message: 'Bad request'
      })
    }
  },
  loginAccount: async(req, res) => {
    try {
      const {email_account, password} = req.body
      const checkDataAccount = await checkAccountModel(email_account)
      if (checkDataAccount.length >=1) {
        const checkPass = bcrypt.compareSync(password, checkDataAccount[0].password)
        console.log(checkPass);
        if (checkPass) {
          const {id_account, name_account, email_account, role} = checkDataAccount[0]
          let payload = {
            id_account,
            name_account,
            email_account,
            role
          }
          console.log(payload);
          const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '2h'})
          payload = { ...payload, token}
          res.send({
            success: true,
            message: 'Success Login!',
            data: payload
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Wrong Password'
          })
        }
      } else {
        res.status(400).send({
          success: false,
          message: 'Email/Account was not registered!'
        })
      }
    } catch (error) {
      res.status(400).send({
        success: false,
        message: 'Bad Request'
      })
    }
  }
}