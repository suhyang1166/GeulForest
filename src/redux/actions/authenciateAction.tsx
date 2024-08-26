const login = (id: string, password: string) => ({
  type: "LOGIN",
  payload: { id, password },
});

const logout = () => ({
  type: "LOGOUT",
});

export const authenciateAction = { login, logout };
