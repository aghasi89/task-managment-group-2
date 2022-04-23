export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export function login(form) {
  return {
    type: LOGIN,
    payload : form
  }
}
