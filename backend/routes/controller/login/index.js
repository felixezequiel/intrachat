const db = require('../../../db')

module.exports = {
  async index (req, res) {
    const { user, password } = req.body
    const response = await db('users').select('*').where({ user, password })
    if (!response.lenght) return res.status(401).json({ auth: false })
    return res.status(200).json({ client: response })
    /* esse é um teste */
  }
}