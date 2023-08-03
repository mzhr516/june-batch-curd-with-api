import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState({});
  const navigate = useNavigate();

  const onCreateButtonClick = () => {
    navigate("create-user");
  };
  const getUserInfo = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        alert("something went wrong");
      });
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const handleOnDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        getUserInfo();
      })
      .catch(() => alert("something went wrong"));
  };
  const handleOnUpdate = (user) => {
    setUpdateUser(user);
  };
  const handlonChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };
  const handleOnsave = () => {
    axios
      .put(`http://localhost:3000/users/${updateUser.id}`, updateUser)
      .then((res) => {
        if (res.data) {
          setUpdateUser({});
          getUserInfo();
        }
      });
  };
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
            if (user.id === updateUser.id) {
              return (
                //update wala tr
                <tr>
                  <td>{index + 1}</td>

                  <td>
                    <input
                      type="text"
                      value={updateUser.name}
                      name="name"
                      onChange={handlonChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={updateUser.age}
                      name="age"
                      onChange={handlonChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={updateUser.city}
                      name="city"
                      onChange={handlonChange}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        setUpdateUser({});
                      }}
                    >
                      cancel
                    </Button>
                    {"  "}
                    <Button
                      onClick={() => {
                        handleOnsave();
                      }}
                    >
                      save
                    </Button>
                  </td>
                </tr>
              );
            } else {
              return (
                //normal wala tr
                <tr>
                  <td>{index + 1}</td>

                  <td>
                    <Link to={`/userDetail/${user.id}`}>{user.name}</Link>
                  </td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>
                    <Button onClick={() => handleOnDelete(user.id)}>
                      delete
                    </Button>
                    {"  "}
                    <Button onClick={() => handleOnUpdate(user)}>update</Button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
};
