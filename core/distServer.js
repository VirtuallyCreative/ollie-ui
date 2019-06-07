// DO NOT USE FOR ACTUAL PRODUCTION SERVER
// THIS IS TO TEST PRODUCTION BUILD LOCALLY BEFORE DEPLOYMENT
import express  from 'express'
import path from 'path'
import open  from 'open'
import compression from 'compression'
var Rollbar = require("rollbar")

const port = 3000
const app = express()

app.use(compression()) // checks dist build pkg sizes, disable for real production (server should already have gzip)
app.use(express.static('dist'))

// include and initialize the rollbar library with your access token
// token here only allows data passed from Node.js, won't work client-side.
let rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_NODE_TOKEN,
  environment: "production",
  captureUncaught: true,
  captureUnhandledRejections: true,
  autoInstrument: true
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.use(rollbar.errorHandler())
app.listen(port, function(err) {
    if (err) {
        rollbar.critical(err) // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port)
    }
})
