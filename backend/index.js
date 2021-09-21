const express = require('express')
const app = express()
const cors = require('cors')
const port = 1414
const Routes = require('./routes')


app.use(express.json())
app.use(cors({
  origin: '*',
  methods: '*'
}))

new Routes(app)

app.listen(port, () => console.log('Servidor rodando na porta ' + port))