import axios from "axios"

const api = axios.create({
  baseURL: "https://pycs-api.onrender.com"
})

export default api