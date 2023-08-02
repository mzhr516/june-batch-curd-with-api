import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const onCreateButtonClick = () => {
    navigate("create-user");
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        alert("something went wrong");
      });
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Button variant="primary" onClick={onCreateButtonClick}>
        create users
      </Button>
      <br />
      <br />
      <br />
      <br />
      <h1>user details table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th> age</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
