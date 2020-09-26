require('dotenv')
const jwt = require('jsonwebtoken')

module.exports = {
  authorizationcomp: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, result)=>{
        if((error && error.name === 'JsonWebTokenError') ||(error && error.name === 'TokenExpiredError')) {
          res.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          if (result.role === 'company') {
            next()
          } else {
            res.status(403).send({
              success: false,
              message: 'You cant access'
            })
          }
        }
      })
    } else {
      res.status(403).send({
        success: false,
        message: 'Please login first!'
      })
    }
  },
  authorizationeng: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, result)=>{
        if((error && error.name === 'JsonWebTokenError') ||(error && error.name === 'TokenExpiredError')) {
          res.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          if (result.role === 'engineer') {
            next()
          } else {
            res.status(403).send({
              success: false,
              message: 'You cant access'
            })
          }
        }
      })
    } else {
      res.status(403).send({
        success: false,
        message: 'Please login first!'
      })
    }
  }
}