import axios from 'axios'
const request = ({ method, route, data }) => axios[method || 'get']('http://localhost:1414' + route, data)

export const SendLogin = (route, data, method) => request({ method, route, data })