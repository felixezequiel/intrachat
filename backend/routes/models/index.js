const db = require('../../db')

class ModelsRoutes {
  async select (req, res, _, table) {
    const response = await db(table).select('*').where(req.query).catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(200).json(response)
  }

  async insert (req, res, _, table) {
    const response = await db(table).insert(req.body, 'id').catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(200).json({ id: response[0] })
  }

  async update (req, res, _, table) {
    const response = await db(table).update(req.body).where(req.params).catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(204).send()
  }

  async delete (req, res, _, table) {
    const response = await db(table).delete().where(req.params).catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(204).send()
  }
}

module.exports = ModelsRoutes