import express  from 'express'
import path from 'path'
import open  from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 3000
const app = express()
const compiler = webpack(config)

const appInsights = require('applicationinsights');
appInsights.setup('#').start();

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', function(req, res) {
  // Hard coded for simplicity. Pretend this is a real endpoint...
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
