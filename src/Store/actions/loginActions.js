import { loginTypes } from "../types/loginTypes";

export const LOG_SUCCESSED = (id, name,mail) => {
  return {
    type:types.LOGIN_SUCCESS,
    payload: {id,name,mail}
  };
};
export const LOG_FAILED = (id, name,mail) => {
    return {
      type:types.LOGIN_FAILED,
      payload: {id,name,mail}
    };
  };

  export const REG_FAILED = (id, name,mail) => {
    return {
      type:types.REGISTRATION_FAILED,
      payload: {id,name,mail}
    };
  };
  export const REG_SUCCESSED = (id, name, mail) => {
    return {
      type:types.REGISTRATION_SUCCESS,
      payload: {id,name,mail}
    };
  };