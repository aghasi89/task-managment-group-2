import { ADD_PROJECT } from "../actions/projectsActions";

let data;
try {
  data = JSON.parse(localStorage.getItem('list')) || []
} catch (e) {
  data = []
}
const INIT_STATE = data


export default function ProjectReducer(state = INIT_STATE, action) {
  switch (action.type) {
        case ADD_PROJECT:
          const list = [...state, action.payload];
          localStorage.setItem('list', JSON.stringify(list));
            return list
      
      default: {
        return state
      }
    }
  }
  