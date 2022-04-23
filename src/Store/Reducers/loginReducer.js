import { LOGIN } from "../actions/loginAction";

localStorage.setItem('users', JSON.stringify({
    email:'aaaa@mail.ru',
    password: '123456'
}));
let users;

try {
  users = JSON.parse(localStorage.getItem('users')) || {}
} catch (e) {
    users = {}
}
const INIT_STATE = {
    users,
    auth:false
}


export default function login(state = INIT_STATE, action) {
  switch (action.type) {
        case LOGIN:
        if (
            users.email == action.payload.email && 
            users.password == action.payload.password 
        ) {
          return {...state, users:action.payload, auth : true}
        }
return {...state, users:null, auth:false}
      default: {
        return state
      }
    }
  }