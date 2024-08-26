export interface AuthState {
  id: string;
  password: string;
  authenciate: boolean;
}

export type AuthAction =
  | { type: "LOGIN"; payload: { id: string; password: string } }
  | { type: "LOGOUT"; payload: { id: string; password: string } };
