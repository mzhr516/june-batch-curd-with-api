import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export const UserDetail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/users/${id}`).then((res) => {
        setDetail(res.data);
      });
    }
  }, [id]);

  const handleOnBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>age </th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{detail.name}</td>
            <td>{detail.age}</td>
            <td>{detail.city}</td>
          </tr>
        </tbody>
      </Table>

      <Button onClick={handleOnBack}>back</Button>
    </div>
  );
};
