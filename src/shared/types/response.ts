interface DefaultResponse {
  success: boolean;
  code: number;
  message: string;
}

export interface ErrorResponse extends DefaultResponse {
  fieldErrors: [
    {
      field: string;
      msg: string;
    }
  ];
}

export interface ListResponse<T> extends DefaultResponse {
  list: T;
}

export interface ResultResponse<T> extends DefaultResponse {
  result: T;
}
