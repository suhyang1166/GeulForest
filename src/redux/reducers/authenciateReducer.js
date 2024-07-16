let initialState = {
  id: "",
  password: "",
  authenciate: false,
};

function authenciateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenciate: true,
      };
    default:
      return { ...state };
  }
}

export default authenciateReducer;
