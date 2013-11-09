var express = require('express')
  , app = express()

app.use(express.static('files'))
app.use(express.directory('files'))

var port = process.env.PORT || 3000

app.listen(port)
console.log('Listening on port', port)