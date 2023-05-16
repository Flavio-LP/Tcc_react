import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3305/tensao_placa",
});

export default api;