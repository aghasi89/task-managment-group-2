import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from "./pages/Start";
import Login from "./pages/login";
import Home from './pages/Main/Home';
import Createproject from "./pages/Main/Createproject";
import Invite from './pages/Main/Invite';
import TaskCategory from './pages/Main/TaskCategory';
import Newtask from './pages/Main/Newtask';
import Commentline from './pages/Main/Commentline';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route>
            <Route path='start' element={<Start/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='invite' element={<Invite/>}/>
            <Route path='createproject' element={<Createproject/>}/>
            <Route path='taskcategory' element={<TaskCategory/>}/>
            <Route path='newtask' element={<Newtask/>}/>
            <Route path='commentline' element={<Commentline/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
