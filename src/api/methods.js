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

export const PUT = async (url, params = {}, axiosConfig = {}) => {
  try {
    const response = await client.put(url, params, axiosConfig);
    return { response, ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export const PATCH = async (url, params = {}, axiosConfig = {}) => {
  try {
    const response = await client.patch(url, params, axiosConfig);
    return { response, ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export const DELETE = async (url, params = {}, axiosConfig = {}) => {
  try {
    const response = await client.delete(url, params, axiosConfig);
    return { response, ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};
