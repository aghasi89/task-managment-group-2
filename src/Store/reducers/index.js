import { combineReducers } from 'redux';
import ProjectReducer from './projectsReducer';
import TaskReducer from './taskReducer';
import login from './loginReducer';

const reducer = combineReducers({
  project:ProjectReducer,
  task:TaskReducer,
  user:login,
  });
  
  export default reducer;