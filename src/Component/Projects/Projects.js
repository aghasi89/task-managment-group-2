import React from 'react';
import { ListGroup, Container, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router'

const Projects = () => {
    const navigate = useNavigate()
    const handleAddProject = (id) => {
            navigate("/createproject")
        }
    return (

        <Container>
            <InputGroup className="mb-3">
                <Button 
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={ handleAddProject}
                >
                    Add New Project
                </Button>
            </InputGroup>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Container>

    );
}

export default Projects;
