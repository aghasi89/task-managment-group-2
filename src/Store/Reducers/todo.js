// import { ADD_ITEM} from "../actions/todo";

// let data;
// try {
//   data = JSON.parse(localStorage.getItem('list')) || []
// } catch (e) {
//   data = []
// }
// const initialState = {
//   list: data,
// }

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_ITEM: {
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
