import axios from "axios";

const api = axios.create({
  baseURL: "https://tccbackend-production.up.railway.app/corrente_placa",
});

export default api;