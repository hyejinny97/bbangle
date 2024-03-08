export interface ErrorResponse {
  message: string;
}

class CustomError extends Error {
  message: string = '';
  code: number = 0;

  constructor({ message, code }: { message: ErrorResponse['message']; code: number }) {
    super();
    this.message = message;
    this.code = code;
  }
}

export default CustomError;
