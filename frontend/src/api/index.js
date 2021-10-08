import axios from 'axios'
import { buildQuery } from './helper'
const request = async ({ method, route, data }) => {
  if (method === 'get') {
    return axios[method || 'get']('http://localhost:1414' + route + buildQuery(data))
  } else {
    return axios[method || 'get']('http://localhost:1414' + route, data)
  }
}

export const SendLogin = async (route, data, method) => await request({ method, route, data })