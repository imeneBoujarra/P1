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
  Table,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// Sample data for folders and pictures
const foldersData = [
  {
    id: 1,
    date: new Date(2024, 3, 28, 12), // April 28, 2024, 12:00 PM
    userId: "user1",
    pictures: ["url1", "url2"],
  },
  {
    id: 2,
    date: new Date(2024, 3, 27, 9), // April 27, 2024, 9:00 AM
    userId: "user2",
    pictures: ["url3", "url4"],
  },
];

function formatDate(date) {
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function Map() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    toggleModal();
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Folders</CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>User ID</th>
                      <th>Pictures</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foldersData.map((folder) => (
                      <tr key={folder.id}>
                        <td>{folder.id}</td>
                        <td>{formatDate(folder.date)}</td>
                        <td>{folder.userId}</td>
                        <td>{folder.pictures.length}</td>
                        <td>
                          <Button
                            color="primary"
                            onClick={() => handleFolderClick(folder)}
                          >
                            View Pictures
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
        <ModalHeader toggle={toggleModal}>Pictures</ModalHeader>
        <ModalBody>
          {selectedFolder && (
            <>
              <h5>User ID: {selectedFolder.userId}</h5>
              <hr />
              <div>
                {selectedFolder.pictures.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Picture ${index + 1}`}
                    style={{ maxWidth: "200px", margin: "5px" }}
                  />
                ))}
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Map;
