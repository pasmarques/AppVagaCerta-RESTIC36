import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.200:3000' //192.168.223.130 //192.168.0.109 //172.26.13.217
})

export default api;