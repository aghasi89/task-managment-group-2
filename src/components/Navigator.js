import React from 'react'
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Contact from '../pages/Contact';
import Main from '../pages/Main/Main';
import About from '../pages/About';
import NewProject from '../pages/NewProject';
import TaskCategory from '../pages/Category';
import CreateTask from '../pages/CreateTask';
import StartPage from '../pages/StartPage';

import { useDispatch, useSelector } from "react-redux";



function Navigator() {
  const auth = useSelector((state) => state.user.auth)


  return (
    <Routes >
      {/* {
        auth ?
          <>
            <Route path='/' element={<Main />} />
            <Route path='LogOut' element={<StartPage />} />
            <Route path='/createproject' element={<NewProject />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/Category' element={<TaskCategory />} />
            <Route path='/Category/:id' element={<TaskCategory />} />
            <Route path='/CreateTask' element={<CreateTask />} />
            <Route path='/CreateTask/:id' element={<CreateTask />} />
          </>
          :
          <>
            <Route path='login' element={<StartPage />} />
            <Route path='/*' element={<Navigate to='/login' />} />
          </>
      } */}

      <Route path='/' element={<Main />} />
      <Route path='LogOut' element={<StartPage />} />
      <Route path='/createproject' element={<NewProject />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/About' element={<About />} />
      <Route path='/Category' element={<TaskCategory />} />
      <Route path='/Category/:id' element={<TaskCategory />} />
      <Route path='/CreateTask' element={<CreateTask />} />
      <Route path='/CreateTask/:id' element={<CreateTask />} />
      <Route path='login' element={<StartPage />} />

    </Routes>
  )
}

export default Navigator;
