import axios, { AxiosResponse } from 'axios';

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;
const TMP_TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTg3OTc1NywiZXhwIjoxNzA5ODkwNTU3LCJpZCI6MTN9.crR0SMca5uCIyel-QZWmG0m-APWmQ2YdPb-OXhobGV0';

async function get(endpoint: string, init?: RequestInit | undefined) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  return res;
}

async function post(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  return res;
}

async function formPost(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  return res;
}

async function put<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function formPut(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  return res;
}

async function patch<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  const bodyData = JSON.stringify(data);

  return axios.patch(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function formPatch<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  return axios.patch(serverUrl + endpoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function del<T>(endpoint: string): Promise<AxiosResponse<T>> {
  return axios.delete(serverUrl + endpoint, {
    headers: {
      Authorization: TMP_TOKEN
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

const API = {
  TMP_TOKEN,
  serverUrl,
  get,
  post,
  formPost,
  put,
  patch,
  formPatch,
  formPut,
  delete: del
};

export { TMP_TOKEN, serverUrl, get, post, formPost, put, patch, formPatch, formPut, del as delete };
export default API;
