const mysql = require('mysql')
const config = require('../../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
let dbConfig = ''
if (config.dev) {
  dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travel'
  }
} else {
  dbConfig = {
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'bedef9d3dab3d5',
    password: 'b8ec2290',
    database: 'heroku_775e0b22e092b02'
  }
}

let connection

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig) // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function(err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err)
      setTimeout(handleDisconnect, 2000) // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }) // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // Connection to the MySQL server is usually
      handleDisconnect() // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err // server variable configures this)
    }
  })
}

handleDisconnect()

module.exports = connection
