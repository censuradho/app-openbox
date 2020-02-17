import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.42.2:3001/mvp_dev/openboxai_plataform/api',
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
})

export default api
