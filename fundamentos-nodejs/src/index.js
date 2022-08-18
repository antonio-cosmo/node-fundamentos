const express = require('express')

const app = express()
app.use(express.json())
const custumers = [
  {
    id: String(new Date().getTime()),
    cpf: "123456789-00",
    name: 'Fulano da Silva',
    statement:[]   
  }
]

app.post('/account', (req, res)=>{
  const {cpf, name} = req.body
  const custumerExist = custumers.some((custumer)=> custumer.cpf === cpf)

  if(custumerExist){
    return res.status(401).send({message: 'Cliente ja existe'})
  }

  custumer.push({
    cpf,
    name,
    id: String(new Date().getTime()),
    statement: []
  })
  return res.status(201).send('Conta criada')
})

app.get('/account/statement/:cpf',(req, res)=>{
  const {cpf} = req.params

  const custumer = custumers.find(custumer => custumer.cpf === cpf)

  if(!custumer) return res.json({message: 'Cliente não cadastrado'})

  return res.json(custumer.statement)
})
 
app.listen('3333')