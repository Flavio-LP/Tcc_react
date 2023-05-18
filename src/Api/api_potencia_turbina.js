import axios from "axios";

const api = axios.create({
  baseURL: "https://tccbackend-production.up.railway.app/potencia_turbina",
});

export default api;