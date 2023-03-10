const connectToMongo = require('./db');
const express = require('express')
const router = express.Router();
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', async (req,res)=> {
  res.send("Hello world, this is iNotebook")
})


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://13.127.185.9:${port}`)
})