const ControllerLogin = require('./controller/login')

module.exports = routes => {
  routes.post('/login', ControllerLogin.index)
}