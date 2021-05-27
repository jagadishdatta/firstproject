import React, { useState, useEffect, useContext } from "react";
import { Form, Buttom, Container, Row, Col } from "react-bootstrap";
import usersdata from "./Usersdata";
import "./styles.css";
import { UsersfromContext } from "../contextapi/UsersfromContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Example() {
  // Initialize required values
  const users = useContext(UsersfromContext);
  const numberofusers = usersdata();
  const [count, setCount] = useState(0);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [companyId, setcompanyId] = useState("");
  const [trackstatus, settrackstatus] = useState(false);
  const [status, setStatus] = useState(false);
  const [errors, setErrorMessage] = useState("");

  const logName = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
  };

  const handleUserNameInput = (e) => {
    setfirstName(e.target.value);
  };
  const handleFirstNameInput = (e) => {
    setlastName(e.target.value);
  };
  const handleLastNameInput = (e) => {
    setemail(e.target.value);
  };
  // Delete Request
  const onRemove = (id) => {
    const userid = id;
    console.log(id);

    fetch("http://localhost:8000/users/" + userid, { method: "DELETE" })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log("delete");
        setStatus(true);
        setTimeout(() => setStatus(false), 3000);
      })
      .catch((error) => {
        setErrorMessage(error);
        console.error("There was an error!", error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        companyId: 1,
      }),
    };
    const cleardata = () => {
      settrackstatus(false);
      setfirstName("");
      setlastName("");
      setemail("");
    };
    fetch("http://localhost:8000/users", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        // check for error response
        if (!response.ok) {
          console.error("Success", error);
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        settrackstatus(true);
        setTimeout(() => cleardata(), 3000);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>Total number of users: {numberofusers.length} </p>

            <p>{trackstatus && <h1>Thank you </h1>}</p>
          </Col>
          <div className="col-md-12">
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                type="text"
                onChange={handleUserNameInput}
                value={firstName}
                placeholder="Your Username"
              />

              <input
                type="text"
                onChange={handleFirstNameInput}
                value={lastName}
                placeholder="Your First Name"
              />

              <input
                type="text"
                onChange={handleLastNameInput}
                value={email}
                placeholder="Your Last Name"
              />

              <button type="submit" onClick={logName}>
                {" "}
                Add User{" "}
              </button>
            </Form>
          </div>
          <div className="col-md-6 offset-2">
            <br></br>
            <h2>Users List</h2>
            <p>{status && <h1>Deleted Succesfully </h1>}</p>
            <br></br>
            <table>
              <tr>
                <th>S.No</th>
                <th>First Name </th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {numberofusers.map((list) => (
                <tr>
                  <td>{list.id} </td>
                  <td>{list.firstName} </td>
                  <td>{list.lastName} </td>
                  <td>{list.email} </td>
                  <td>
                    <Link
                      to={`./Edituser/${list.id}`}
                      color="warning"
                      className="btn btn-warning mr-1"
                    >
                      Edit
                    </Link>
                  </td>

                  <td>
                    <button type="button" onClick={() => onRemove(list.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Example;
