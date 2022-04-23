// import { ADD_MEMBER} from "../actions/membersActions";

// let data;
// try {
//   data = JSON.parse(localStorage.getItem('list')) || []
// } catch (e) {
//   data = []
// }
// const initialState = {
//   list: data,
// }

// export default function MemberReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_MEMBER: {
//       const list = [...state.list, action.payload];
//       localStorage.setItem('list', JSON.stringify(list));
//       return {
//         ...state,
//         list,
//       }
//     }
    
//     default: {
//       return state
//     }
//   }
// }
