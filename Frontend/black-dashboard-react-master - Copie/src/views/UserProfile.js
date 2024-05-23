/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button, 
  Row, 
  Col 
} from "reactstrap";

function AddUser() {
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    role: "Technician",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save user data to database or perform any other action
    console.log("User data:", userData);
    // Reset form fields after submission if needed
    setUserData({
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      role: "Technician",
      password: "",
      confirmPassword: "",
      phoneNumber: ""
    });
  };

  return (
    <Col md="8">
      <Card>
        <CardHeader>
          <h5 className="title">Add a user</h5>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col className="pr-md-1" md="5">
                <FormGroup>
                  <Label>Id User</Label>
                  <Input
                    placeholder="This will auto generate"
                    type="text"
                    value={userData.id}
                    name="id"
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col className="pl-md-1" md="4">
                <FormGroup>
                  <Label>Email address</Label>
                  <Input
                    placeholder="Example@gmail.com"
                    type="email"
                    value={userData.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-md-1" md="6">
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    placeholder="First Name"
                    type="text"
                    value={userData.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col className="pl-md-1" md="6">
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    placeholder="Last Name"
                    type="text"
                    value={userData.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label>Role : Admin / Technician</Label>
                  <Input
                    placeholder="Role"
                    type="text"
                    defaultValue={userData.role}
                    name="role"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-md-1" md="4">
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={userData.password}
                    name="password"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col className="px-md-1" md="4">
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    value={userData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col className="pl-md-1" md="4">
                <FormGroup>
                  <Label>Phone number</Label>
                  <Input
                    placeholder="Phone Number +216"
                    type="number"
                    value={userData.phoneNumber}
                    name="phoneNumber"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn-fill" color="primary" type="submit">
              Save
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/anime3.png")}
                    />
                    <h5 className="title">Abdelaziz Marzouk</h5>
                  </a>
                  <p className="description">Admin Work in the IT department</p>
                </div>
                <div className="card-description">
                  "Please, Mr. Marzouk, ensure that you check this platform daily to ensure that our servers and services are working well and as planned. Many thanks for your hard work in keeping this company the best."
                </div>
              </CardBody>
            </Card>
          </Col>
          <AddUser />
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
