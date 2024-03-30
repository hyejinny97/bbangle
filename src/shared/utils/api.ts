import { getCookie } from '@/action';
import { cookies } from 'next/headers';
import { API_URL } from '../constants/api';

const API_V1_URL = `${API_URL}/api/v1`;

const getAccessToken = async () => {
  const isServerSide = typeof window === 'undefined';

  if (isServerSide) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');
    return accessToken?.value;
  }

  const accessToken = await getCookie('accessToken');
  return accessToken?.value;
};

const getApiUrl = (endpoint: string) => {
  if (endpoint.startsWith('https://') || endpoint.startsWith('http://')) return endpoint;
  return `${API_V1_URL}${endpoint}`;
};

async function get(endpoint: string, init?: RequestInit | undefined) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearerToken
    },
    ...init
  });
}

async function post(endpoint: string, init?: RequestInit) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearerToken
    },
    ...init
  });
}

async function formPost(endpoint: string, init?: RequestInit) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'POST',
    headers: {
      Authorization: bearerToken
    },
    ...init
  });
}

async function put(endpoint: string, init?: RequestInit) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearerToken
    },
    ...init
  });
}

async function formPut(endpoint: string, init?: RequestInit) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'PUT',
    headers: {
      Authorization: bearerToken
    },
    ...init
  });
}

async function patch(endpoint: string, init?: RequestInit) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearerToken
    },
    ...init
  });
}

async function formPatch(endpoint: string, init?: RequestInit) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'PATCH',
    headers: {
      Authorization: bearerToken
    },
    ...init
  });
}

async function _delete(endpoint: string, init?: RequestInit) {
  const accessToken = await getAccessToken();
  const bearerToken = `Bearer ${accessToken}`;

  return fetch(getApiUrl(endpoint), {
    method: 'DELETE',
    headers: {
      Authorization: bearerToken
    },
    ...init
  });
}

const API = {
  get,
  post,
  formPost,
  put,
  patch,
  formPatch,
  formPut,
  delete: _delete
};

export default API;
