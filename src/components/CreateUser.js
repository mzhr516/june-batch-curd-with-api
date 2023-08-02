import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const CreateUser = (props) => {
  const [formData, setFormData] = useState({ name: "", age: 0, city: "" });
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", { ...formData, id: uuidv4() })
      .then((res) => {
        if (res.data) {
            navigate("/");
        }
      })
      .catch(() => {
        alert("something went wrong");
      });
  };
  const handleOnInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ width: "50%", marginLeft: "23%", marginTop: "13%" }}>
      <h1>Create users from Hear</h1>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleOnInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter age"
            name="age"
            onChange={handleOnInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>city</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter city"
            name="city"
            onChange={handleOnInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
