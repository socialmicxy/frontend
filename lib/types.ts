export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

export type User = {
  isLoggedIn: boolean;
  login: string;
  avatarUrl: string;
  email: string;
};
