const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.disable('powered-by-x')

app.get('/ping', (req, res, next) => {
  res.json({message: 'pong!'})
})

app.use((err, res, req, next) => {
  const status = error.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'Not found'}})
})


const listener = () => console.log(`Listening on ${port}`);
app.listen(port, listener)
