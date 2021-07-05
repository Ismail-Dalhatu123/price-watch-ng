import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3005/",
  headers: {
    "x-auth-token":
      localStorage.getItem("PWtoken") ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJGaXJzdE5hbWUiOiJJc21haWwiLCJMYXN0TmFtZSI6IkRhbGhhdHUiLCJFbWFpbCI6ImlzbWFpbGRhbGhhdHU0NDJAZ21haWwuY29tIiwiX2lkIjoiNjBkY2RiYjZmMTEwMzc1YTcwMDExMDk0IiwiaXNTdXBlciI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwiZXhwaXJ5IjpudWxsLCJpYXQiOjE2MjU0NzI5MDd9.l8i6PRy2JOhFRTB25sOe_dUW3wWGJkhB5YOoExJX5pk",
  },
});

export default client;
