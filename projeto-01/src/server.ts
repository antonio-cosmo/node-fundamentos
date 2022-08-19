import express from 'express'

const app = express()

app.get('/', (req, res)=>{
  return res.send('Ola mundo')
})
app.listen('3333')