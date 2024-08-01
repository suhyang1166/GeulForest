const login = (id, password) => ({
  type: "LOGIN",
  payload: { id, password },
});

const logout = () => ({
  type: "LOGOUT",
});

export const authenciateAction = { login, logout };
