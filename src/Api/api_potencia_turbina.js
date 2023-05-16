import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3305/potencia_turbina",
});

export default api;