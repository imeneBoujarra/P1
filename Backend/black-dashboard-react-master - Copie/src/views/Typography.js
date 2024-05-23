import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function UserManagement() {
  const [userId, setUserId] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleDeleteUser = () => {
    // Add logic here to delete the user with the specified ID
    alert(`Deleting user with ID: ${userId}`);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">User Management</h5>
                <CardTitle tag="h3">
                  Manage Users
                </CardTitle>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label for="userId">User ID</Label>
                  <Input
                    type="text"
                    id="userId"
                    value={userId}
                    onChange={handleUserIdChange}
                    placeholder="Enter User ID"
                  />
                </FormGroup>
                <Button color="danger" onClick={handleDeleteUser}>Delete User</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserManagement;