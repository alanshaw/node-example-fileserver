var express = require('express')
  , app = express()

app.use(express.static('files'))
app.use(express.directory('files'))

app.listen(3000)
console.log('Listening on port 3000')