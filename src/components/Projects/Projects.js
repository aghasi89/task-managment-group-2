import React, { useState } from 'react';
import { ListGroup, Container, InputGroup, Button } from 'react-bootstrap';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";



export default  function Projects() {
    const navigate = useNavigate()

const project = useSelector((state) => state.project);
const click = (e,id)=> {
    navigate(`Category/${id}`)
}
    return (

        <Container>
            <InputGroup className="mb-3">
             <Link to="/createproject" > 
              <Button 
                    variant="outline-secondary"
                    id="button-addon2"
                >
                    ADDING NEW PROJECT
                    
                </Button>
                </Link> 
            </InputGroup>
                <div >
            {
                project?.map ( todo => (
                    <div onClick={(e)=>click(e,todo.id)} className='project_input' key={todo.id} >
                        {todo.text}
                    </div>
                ))
            }
            </div>

        </Container>

    );
}


