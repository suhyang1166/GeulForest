let initialState = {
  id: "",
  password: "",
  authenciate: false,
};

function authenciateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenciate: true,
      };
    case "LOGOUT":
      return {
        ...state,
        id: "",
        password: "",
        authenciate: false,
      };
    default:
      return { ...state };
  }
}

export default authenciateReducer;
