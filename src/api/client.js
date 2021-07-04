import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "x-auth-token": localStorage.getItem("PWtoken"),
  },
});

export default client;
