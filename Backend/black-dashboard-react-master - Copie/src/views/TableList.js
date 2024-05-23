import React, { useState } from "react";
//import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

function Tables() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "+123456789",
      password: "password",
      role: "User",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phoneNumber: "+987654321",
      password: "password123",
      role: "Admin",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    toggleModal();
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const renderUserDetails = () => {
    if (!selectedUser) return null;
    return (
      <div>
        <p>Phone Number: {selectedUser.phoneNumber}</p>
        <p>Password: {selectedUser.password}</p>
        <p>Role: {selectedUser.role}</p>
      </div>
    );
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col>
                    <CardTitle tag="h4">Users</CardTitle>
                  </Col>
                  <Col className="text-end">
                    <Link to="/Icons">
                      <Button color="success">Add User</Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>First Name</th>
                      <th>Email</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.lastName}</td>
                        <td>{user.firstName}</td>
                        <td>{user.email}</td>
                        <td className="text-center">
                          <Button
                            color="info"
                            onClick={() => handleViewDetails(user)}
                          >
                            View Details
                          </Button>{" "}
                          <Button
                            color="danger"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>User Details</ModalHeader>
        <ModalBody>{renderUserDetails()}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Tables;
