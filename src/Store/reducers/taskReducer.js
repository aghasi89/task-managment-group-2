import { ADD_TASK } from "../actions/taskActions";

let data;
try {
  data = JSON.parse(localStorage.getItem('list2')) || []
} catch (e) {
  data = []
}
const INIT_STATE = data


export default function TaskReducer(state = INIT_STATE, action) {
  switch (action.type) {
        case ADD_TASK:
          const list2 = [...state, action.payload];
          localStorage.setItem('list2', JSON.stringify(list2));
           return list2
           
      
      default: {
        return state
      }
    }
  }
  