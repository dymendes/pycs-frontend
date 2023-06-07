import axios from "axios"

const api = axios.create({
  baseURL: "https://pycs-api.vercel.app"
})

export default api