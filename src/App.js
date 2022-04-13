import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from "./Pages/Start";
import Login from "./Pages/Login";
import Home from './Pages/Main/Home';
import Createproject from "./Pages/Createproject";
import Invite from './Pages/Invite';
import TaskCategory from './Pages/Taskcategory';
import Newtask from './Pages/Main/Newtask';
import Commentline from './Pages/Commentline';

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
          <Route path='invite' element={<Invite/>}/>
          <Route path='createproject' element={<Createproject/>}/>
          <Route path='taskcategory' element={<TaskCategory/>}/>
          <Route path='newtask' element={<Newtask/>}/>
          <Route path='commentline' element={<Commentline/>}/>
      </Route>

      </header>
      </Routes>
    </div>
  );
}

export default App;
