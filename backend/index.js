const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.static("../build"))

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req,res)=>"Hello world")


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})