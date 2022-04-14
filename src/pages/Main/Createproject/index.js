import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';


export default () => {

  const click = () => {
    alert('kuku')
  }

  return (
    <div style={{ width: '40%', margin: '50px auto' }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button onClick={click} variant="outline-secondary" id="button-addon2">
          New Project
        </Button>
      </InputGroup>
    </div>
  )
};