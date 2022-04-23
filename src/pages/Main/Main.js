import React, { useState } from 'react';
import "./main.css"
import { ListGroup, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { addItem, filterItem } from '../../store/actions/todo';
import { useDispatch } from "react-redux";
import { v1 as uuid } from 'uuid';
import Members from '../../components/Members/Members';
import Projects from '../../components/Projects/Projects';
import Header from '../../components/Header/Header';
import User from '../../components/User/User';

const Main = () => {
    return (
        <div>
            <Header/>
        <div className='main_wrapper'>
            {/* <Members /> */}
            <Projects />
            <User/>
        </div>
        </div>
            
    );
}
export default Main;
