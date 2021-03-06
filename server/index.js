const cluster = require('cluster')
const workers = process.env.WORKERS || require('os').cpus().length
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const cors = require('cors')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const experienceRoutes = require('./routes/experienceRoutes')
const statesRoutes = require('./routes/statesRoutes')
const app = express()

if (cluster.isMaster) {
  console.log('start cluster with %s workers', workers)

  cluster.on('exit', function(worker) {
    console.log('worker %s died. restart...', worker.process.pid)
    cluster.fork()
  })
}

process.on('uncaughtException', function(err) {
  console.error(new Date().toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1)
})
async function start() {
  app.use(cors())
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(express.json())
  app.use(bodyParser.json()) // to support JSON-encoded bodies
  app.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true
    })
  )
  app.use(experienceRoutes, statesRoutes)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
}
start()
