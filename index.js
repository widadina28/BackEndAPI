const express = require ('express')
const bodyParser = require('body-parser')
const port = 8080

const companyRouter = require('./src/routes/company')
const locationRouter = require('./src/routes/location')
const skillRouter = require('./src/routes/skill')
const flanceRouter = require('./src/routes/freelance')
const expertRouter = require('./src/routes/expertise')
const expRouter = require('./src/routes/experience')
const acc_companyRouter = require('./src/routes/acc_company')
const acc_engineerRouter = require('./src/routes/acc_engineer')
const portofolioRouter = require('./src/routes/portofolio')
const hireRouter = require('./src/routes/hire')
const engineerRouter = require('./src/routes/engineer')
const projectRouter = require('./src/routes/project')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use('/company', companyRouter)
app.use('/location', locationRouter)
app.use('/skill', skillRouter)
app.use('/freelance', flanceRouter)
app.use('/expertise', expertRouter)
app.use('/experience', expRouter)
app.use('/acc_company', acc_companyRouter)
app.use('/acc_engineer', acc_engineerRouter)
app.use('/portofolio', portofolioRouter)
app.use('/hire', hireRouter)
app.use('/engineer', engineerRouter)
app.use('/project', projectRouter)
app.listen( port )
