import React from 'react'
import {Route, Routes, useLocation } from "react-router-dom";
import Contact from '../pages/Contact';
import Main from '../pages/Main/Main';
import About from '../pages/About';
import NewProject from '../pages/NewProject';
import TaskCategory from '../pages/Category';
import CreateTask from '../pages/CreateTask';
import StartPage from '../pages/StartPage';



function Navigator() {
    return (
          <Routes >
              <Route path='/' element={<Main />}/>
              <Route path='login' element={<StartPage />}/>
              <Route path='LogOut' element={<StartPage />}/>
]              <Route  path='/createproject' element={<NewProject />}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Category' element={<TaskCategory/>}/>
              <Route path='/Category/:id' element={<TaskCategory/>}/>
              <Route path='/CreateTask' element={<CreateTask/>}/>
              <Route path='/CreateTask/:id' element={<CreateTask/>}/>
              LogOut
           </Routes>
    )
  }
  
  export default Navigator;
