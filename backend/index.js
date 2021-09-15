const express = require('express')
const app = express()
const cors = require('cors')
const port = 1414
const routes = require('./routes')


app.use(express.json())
app.use(cors({
  origin: '*',
  methods: '*'
}))

routes(app)

app.listen(port, () => console.log('Servidor rodando na porta ' + port))