const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
// const port = 4000

app.get('/', (req, res) => {
  res.send('Application is running in production mode!')
})


app.get('/health', (req, res) => {
  res.send('OK - Application is healthy!')
})

app.get('/school', (req, res) => {
  res.send('OK - Application is healthy!')
})

 
// app.post('/data', (req, res) => {
//   // Handle POST request to /data
//   const data = req.body;
//   // Process the received data
//   console.log('Received data:', data);
//   res.send('Data received successfully!')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
