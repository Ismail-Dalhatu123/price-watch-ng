import axios from "axios";

const client = axios.create({
  baseURL: "http://172.20.10.2:3005",
  headers: {
    "x-auth-token": localStorage.getItem("PWtoken"),
  },
});

export default client;
