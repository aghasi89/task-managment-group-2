import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../Store/Actions";
import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
export  const Login = () => {
  const dispatch = useDispatch();
 const history = useHistory();
  const state = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if ( state.email == email && state.pass == password) {
        dispatch(getLogin());
        history.push("/");
      } else {
        alert("Failed!!");
      }
    } else {
      alert("Wrong password or mail!!");
    }
  };
   return (
    <section className="section bg-light">
      <div className="container ht-100 d-flex justify-content-center align-items-center">
        <div className="card p-2 shadow-lg d-flex card-width-300 justify-content-center align-items-center">
          <h3 className="mb-3">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
            {/* <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> */}
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};
