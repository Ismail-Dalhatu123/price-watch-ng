import { useState } from "react";
import { POST } from "../api/methods";
import urls from "../api/urls";

function useClientApi(props) {
  const [loading, setLoading] = useState(false);

  const AuthenticateUser = async (cred) => {
    setLoading(true);
    const res = await POST(urls.login, cred);
    setLoading(false);
    return res;
  };

  const GET = async (url, params = {}, axiosConfig = {}) => {
    setLoading(true);
    const res = await GET(url, params, axiosConfig);
    setLoading(false);
    return res;
  };

  return { AuthenticateUser, loading, GET };
}

export default useClientApi;
