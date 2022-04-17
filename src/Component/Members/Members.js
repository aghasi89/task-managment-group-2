import React, { useState } from 'react'
import { ListGroup, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router'
import {addTask} from "../../Store/actions/taskActions"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v1 as uuid } from 'uuid';
//import { deleteItem, done } from '../../store/actions/todo';


export default function Members() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [text, setText] = useState("")
    let list = useSelector((state) => state.list);
    const onChange = (e) => {
        setText(e.target.value)
    }
    const handleAddMember = (e) => {
        e.preventDefault()
        dispatch(addTask({
            id: uuid(),
            text,
            isDone: false
        }))
        setText("")
    }

    // const handleDelete = (id) => {
    //     dispatch(deleteItem(id))
    // }
    // const handleEdit = (id) => {
    //     navigate(`/edit/${id}`)
    // }
    return (
        <Container>
            
            <InputGroup className="mb-3">
                <FormControl
                    value={text}
                    onChange={onChange}
                    placeholder="Add Members"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button
                    onClick={handleAddMember}
                    variant="outline-secondary"
                    id="button-addon2">
                    Add
                </Button>
            </InputGroup>
            <ListGroup>
                {
                    list.map(todo => (
                        <ListGroup.Item key={todo.id}>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    )
}
