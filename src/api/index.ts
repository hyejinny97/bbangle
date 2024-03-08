import checkError from '@/commons/utils/checkError';

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;
const TMP_TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTg5MTQyNSwiZXhwIjoxNzA5OTAyMjI1LCJpZCI6MTN9.6LN6x7mdeh4-JrXp0GRqxakAuHolS8c5VoATtcNuEN0';

async function get<T>(endpoint: string, init?: RequestInit | undefined) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  await checkError(res);
  const data: T = await res.json();

  return data;
}

async function post<T>(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data: T = await res.json();

  return data;
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
  await checkError(res);
  const data = await res.json();

  return data;
}

async function put<T>(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data: T = await res.json();

  return data;
}

async function formPut<T>(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data: T = await res.json();
  return data;
}

async function patch<T>(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data: T = await res.json();
  return data;
}

async function formPatch<T>(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PATCH',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data: T = await res.json();
  return data;
}

async function del<T>(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'DELETE',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data: T = await res.json();
  return data;
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

export default API;
