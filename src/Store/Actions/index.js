import { LOGIN_SUCCESS, LOGOUT_SUCCESS,REGISTRATION_SUCCESS} from "../Types"
export const getLogin = () => {
    console.log("called login");
    return {
      type: LOGIN_SUCCESS
    };
  };
  export const getLogout = () => {
    console.log("called logout");
    return {
      type: LOGOUT_SUCCESS
    };
  };
  
  export const getRegister = () => {
    console.log("called registr");
    return {
      type: REGISTRATION_SUCCESS
    };
  };