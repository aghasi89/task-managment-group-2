import React, { useState } from 'react'
import { ListGroup, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { addItem, filterItem } from '../../store/actions/todo';
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from 'uuid';


export default function Members() {
    const dispatch = useDispatch();
    const [text, setText] = useState("")
    let list = useSelector((state) => state.list);
    const onChange = (e) => {
        setText(e.target.value)
    }
    const handleAddMember = (e) => {
        e.preventDefault()
        dispatch(addItem({
            id: uuid(),
            text,
        }))
        setText("")
    }

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
            <ListGroup  >
                {
                    list.map(todo => (
                        <ListGroup.Item key={todo.id}>
                            {todo.text}
                            {/* <i className="fas fa-edit" onClick={handleEdit(todo.id)}></i>
                            <i className="fas fa-trash" onClick={handleDelete(todo.id)}></i> */}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    )
}
