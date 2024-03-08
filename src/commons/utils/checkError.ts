import CustomError from '../types/errorType';

async function checkError(res: Response) {
  if (res.ok) return;

  const errorData = await res.json();
  throw new CustomError({ message: errorData.message, code: res.status });
}

export default checkError;
