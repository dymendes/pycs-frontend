import axios from "axios"

const api = axios.create({
  baseURL: "https://api.pycs.site"
})

export default api