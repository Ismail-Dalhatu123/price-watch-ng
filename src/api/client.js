import axios from "axios";

const client = axios.create({
  baseURL: "https://price-watch-backend.herokuapp.com/",
  headers: {
    "x-auth-token": localStorage.getItem("PWtoken"),
  },
});

export default client;
