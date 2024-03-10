import { checkError, parseJson } from '@/commons/utils/apiUtils';

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;
const TMP_TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTM4MDYxOSwiZXhwIjoxNzA5MzkxNDE5LCJpZCI6NH0.A22pxkdD_OR1ynGWnKo7WD60XRiJwKhW2p3GqR8Q548';

async function get(endpoint: string, init?: RequestInit | undefined) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  await checkError(res);
  const data = await parseJson(res);
  return data;
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
  await checkError(res);
  const data = await parseJson(res);
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
  const data = await parseJson(res);
  return data;
}

async function put(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function formPut(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });

  await checkError(res);

  const data = await parseJson(res);
  return data;
}

async function patch(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function formPatch(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'PATCH',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function _delete(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'DELETE',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
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
  delete: _delete
};

export default API;
