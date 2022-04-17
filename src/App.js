import './App.css';
//import Header from './Component/HomePage/Header';
import { Route, Routes } from 'react-router-dom';
import Start from "./Pages/Start"
import Login from "./Pages/Login";
import Home from './Pages/Main/Home/home';
import Createproject from "./Pages/Main/Createproject";
import Invite from './Pages/Main/Invite';
import TaskCategory from './Pages/Main/TaskCategory';
import Newtask from './Pages/Main/Newtask';
import Commentline from './Pages/Main/Commentline';

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
      
      <h1>REACT</h1>
    </div>
  );
}

export default App;
