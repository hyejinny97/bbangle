export interface ErrorResponse {
  message: string;
}
export interface ErrorProps {
  error: CustomError & { digest?: string };
  reset: () => void;
}

export interface CustomErrorProps {
  message: ErrorResponse['message'];
  code: number;
}

class CustomError extends Error {
  code: number = 0;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export default CustomError;
