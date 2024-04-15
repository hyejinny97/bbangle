interface DefaultResponse {
  success: true;
  code: 0;
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
