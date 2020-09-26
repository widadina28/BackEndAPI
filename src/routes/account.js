const {Router}= require('express')
const {registerAccount, loginAccount} = require('../controller/account')
const router = Router()


router.post('/register', registerAccount)
router.post('/login', loginAccount)


module.exports = router