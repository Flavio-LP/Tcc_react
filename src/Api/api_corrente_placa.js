import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3305/corrente_placa",
});

export default api;