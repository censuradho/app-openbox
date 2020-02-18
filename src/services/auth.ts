import axios from 'axios'

const api = axios.create({
  baseURL: 'http://openbox.ai/mvp_dev/api',
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
})

export default api
