import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3305/tensao_turbina",
});

export default api;