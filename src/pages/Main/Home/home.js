import React, { useState } from 'react';
import "./main.css"
import { ListGroup, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
//import { addItem, filterItem } from '../../store/actions/todo';
import { useDispatch } from "react-redux";
import { v1 as uuid } from 'uuid';
import Members from "../../../Component/Members/Members";
import Projects from "../../../Component/Projects/Projects"

const Main = () => {

    return (
        <div className='main_wrapper'>

            <Members />

            <Projects />
            <Container>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
    );
}

export default Main;
