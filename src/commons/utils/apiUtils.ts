import { redirect } from 'next/navigation';
import { ErrorResponse } from '../types/errorType';

export async function checkError(res: Response) {
  if (res.ok) return;
  if (res.status === 401) {
    redirect('/login');
  }

  const errorData: ErrorResponse = await res.json();
  throw new Error(errorData.message);
}

export async function parseJson(res: Response) {
  try {
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}
