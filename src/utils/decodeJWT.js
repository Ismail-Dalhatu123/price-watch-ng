import jwt from "jwt-decode";
const decodeJWT = () => {
  try {
    const tokenData = jwt(localStorage.getItem("PWtoken"));
    return { succes: true, tokenData };
  } catch (error) {
    return { succes: false };
  }
};

export default decodeJWT;
