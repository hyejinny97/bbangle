import CustomError from '../types/errorType';

export async function checkError(res: Response) {
  if (res.ok) return;

  const errorData = await res.json();
  throw new CustomError({ message: errorData.message, code: res.status });
}

export async function parseJson(res: Response) {
  try {
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}
