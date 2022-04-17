import { LOGIN_SUCCESS, LOGOUT_SUCCESS,REGISTRATION_SUCCESS } from "../Types";
const initialState = {
  isAuthenticated: localStorage.getItem("user") || false,
  user: { email: "ginosbakm@mail.ru", pass: "123456" }
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("user", true);
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
      localStorage.setItem("user", false);
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
};

export default AuthReducer;
