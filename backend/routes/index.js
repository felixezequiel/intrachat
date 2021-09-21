const ModelsRoutes = require('./models')

class Routes extends ModelsRoutes {
  constructor(routes) {
    super()
    this.routes = routes
    this.listRoutes = [
      { route: '/users', table: 'users' }
    ]
    this.defineRoutes()
  }

  defineRoutes() {
    this.listRoutes.forEach(route => {
      this.routes.get(route.route, (req, res) => this.select(req, res, null, route.table))
      this.routes.post(route.route, (req, res) => this.insert(req, res, null, route.table))
      this.routes.put(route.route + '/:id', (req, res) => this.update(req, res, null, route.table))
      this.routes.delete(route.route + '/:id', (req, res) => this.delete(req, res, null, route.table))
    })

    this.routes.post('/')
  }
}

module.exports = Routes