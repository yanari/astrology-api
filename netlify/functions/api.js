const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const serverless = require('serverless-http')

const app = express()

app.set('trust proxy', 'loopback')

// cors
app.use(cors())

if (process.env.ENVIRONMENT !== 'test') {
  // logger
  app.use(
    morgan(
      '[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
    )
  )
}

// helmet configurations
app.use(helmet())

app.use(helmet.referrerPolicy())

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"]
    }
  })
)

app.use(
  helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      vibrate: ["'none'"],
      syncXhr: ["'none'"]
    }
  })
)

app.use(express.json())

const api = require('../../src/api')

app.use('/api/', api)

export const handler = serverless(api);
