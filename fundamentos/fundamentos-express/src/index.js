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

function balance(custumer){
  const accountBalance = custumer.statement.reduce((total, statement) => {
    if(statement.type === 'credit'){
      return total += statement.amount
    }else if(statement.type === 'debit'){
      return total -= statement.amount
    }

    return total
  }, 0)

  return accountBalance
}

// Middlewares

function verifyIfCustumerExist(req, res, next){
  const {cpf} = req.headers

  const custumer = custumers.find(custumer => custumer.cpf === cpf)

  if(!custumer) return res.json({message: 'Cliente não cadastrado'})

  req.custumer = custumer

  return next()
}

app.post('/account', (req, res)=>{

  const {cpf, name} = req.body
  const custumerExist = custumers.some((custumer)=> custumer.cpf === cpf)

  if(custumerExist){
    return res.status(401).send({message: 'Cliente ja existe'})
  }

  custumers.push({
    cpf,
    name,
    id: String(new Date().getTime()),
    statement: []
  })
  return res.status(201).send('Conta criada')
})

app.get('/accounts', (req, res)=>{
  return res.json(custumers)
})



app.use(verifyIfCustumerExist)

app.get('/account', (req, res)=>{
  const {custumer} = req

  return res.json(custumer)
})

app.get('/account/statement', (req, res)=>{

  const {custumer} = req
  
  return res.json(custumer.statement)
})

app.post('/account/deposit', (req, res)=> {
  const {description, amount} = req.body
  const {custumer} = req

  custumer.statement.push({
    description,
    amount,
    type: 'credit',
    createdAt: new Date()

  })

  res.status(204).send()

})

app.post('/account/withdraw', (req, res)=>{
  const {amount} = req.body 
  const {custumer} = req 
  const totalBalance = balance(custumer)
  if(totalBalance <= amount ) return res.json({message: 'saldo insuficiente'})

  const accountWithdraw = {
    amount,
    type:'debit',
    createdAt: new Date()
  }

  custumer.statement.push(accountWithdraw)

  return res.status(204).send()
})

app.get('/account/balance', (req, res)=> {
  const {custumer} = req 

  const totalBalance = balance(custumer)

  return res.json({ totalBalance})
})

app.put('/account', (req, res)=>{
  const {name} = req.body 
  const {custumer} = req 

  custumer.name = name

  return res.status(200).send()
})

app.delete('/account', (req, res)=>{
  const {custumer} = req

  const indice = custumers.findIndex((value)=> value.cpf === custumer.cpf)

  custumers.splice(indice, 1)

  return res.send()
})


app.listen('3333')