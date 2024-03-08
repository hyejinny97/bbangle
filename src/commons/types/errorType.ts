export interface ErrorProps extends Error {
  error: CustomError & { digest?: string };
  reset: () => void;
}

class CustomError extends Error {
  message: string = '';

  code: number = 0;

  constructor({ message, code }: { message: string; code: number }) {
    super();
    this.message = message;
    this.code = code;
  }
}

export default CustomError;
