import client from "./client";

export const GET = async (url, params = {}, axiosConfig = {}) => {
  try {
    const response = await client.get(url, params, axiosConfig);
    return { response, ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export const POST = async (url, params = {}, axiosConfig = {}) => {
  try {
    const response = await client.post(url, params, axiosConfig);
    return { response, ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};
