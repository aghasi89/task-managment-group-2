import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from "./pages/Start";
import Login from "./pages/login";
import Home from './pages/home';
import CreateProject from "./pages/createProject";
import Invite from './pages/invite';
import TaskCategory from './pages/taskCategory';
import NewTask from './pages/newTask';
import CommentLine from './pages/commentLine';

function App() {
  return (
    <div className="App">
      <Routes>
      <header className="App-header">
      Header
      <Route>
          <Route path='start' element={<Start/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='createproject' element={<CreateProject/>}/>
          <Route path='taskcategory' element={<TaskCategory/>}/>
          <Route path='newtask' element={<NewTask/>}/>
          <Route path='commentline' element={<CommentLine/>}/>
      </Route>

      </header>
      </Routes>
    </div>
  );
}

export default App;
