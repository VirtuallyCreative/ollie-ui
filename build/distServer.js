import express  from 'express'
import path from 'path'
import open  from 'open'
import compression from 'compression'


const appInsights = require('applicationinsights');
require('dotenv').config();
let APIkey = process.env.APPINSIGHTS_INSTRUMENTATIONKEY;
appInsights.setup(APIkey).start();

const port = 3000
const app = express()

app.use(compression()) // checks dist build pkg sizes, disable for real production (server should already have gzip)
app.use(express.static('dist'))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', function(req, res) {
  // Hard coded for simplicity. Pretend this is a real endpoint... disable for real production
  res.json([
    {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob.smith@email.com"},
    {"id":2,"firstName":"Abe","lastName":"Doe","email":"abe.doe@email.com"},
    {"id":3,"firstName":"Rob","lastName":"Johnson","email":"rob.johnson@email.com"}
  ])
})

app.listen(port, function(err) {
    if (err) {
        console.log(err) // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port)
    }
})
