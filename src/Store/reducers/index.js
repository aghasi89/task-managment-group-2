import { combineReducers } from 'redux';
import ProjectReducer from './projectsReducer';
import TaskReducer from './taskReducer';
const reducer = combineReducers({
project:ProjectReducer,
task:TaskReducer
    
  });
  
  export default reducer;