import { act } from "react-dom/test-utils";

const initialState={
    todos: [],
    id:0
}
const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "ADD_TASK":
        let newState={...state};
        newState.id++;
            return {
                ...newState,
                todos: [...newState.todos,
                    {
                    task:action.task,
                    id:newState.id
                }]
             
            };
            case "DELETE_TASK":

            
            default:
                return state
        }
}
export default reducer