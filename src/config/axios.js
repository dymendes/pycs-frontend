import axios from "axios"

const api = axios.create({
  baseURL: "http://15.229.47.17:3000"
})

export default api