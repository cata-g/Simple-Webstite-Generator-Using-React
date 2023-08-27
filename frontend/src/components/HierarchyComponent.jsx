import React, { useState } from "react";
import "./Components.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextStyle from "./formatting_options/TextStyle";
import TextTransform from "./formatting_options/TextTransform";
import TextAlignment from "./formatting_options/TextAlignment";
import InputArea from "./formatting_options/InputArea";

export default function Components({
  id,
  name,
  content,
  handleAdd,
  handleDelete,
  handleEditComponent,
  tags,
  style,
  alignment,
  cap,
  text,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [newStyle, setNewStyle] = useState("");
  const [newCap, setNewCap] = useState(cap);
  const [newAlign, setNewAlign] = useState(alignment);
  const [newContentText, setNewContentText] = useState(text);
  const saveContent = () => {
    handleEditComponent(
      newContentText,
      id,
      tags,
      newContentText,
      newStyle,
      newCap,
      newAlign
    );
    handleClose();
  };

  return (
    <>
      {showModal && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{tags}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextStyle newStyle={newStyle} setNewStyle={() => setNewStyle} />
            <TextTransform newCap={newCap} setNewCap={() => setNewCap} />
            <TextAlignment
              newAlign={newAlign}
              setNewAlign={() => setNewAlign}
            />
            <InputArea
              newContentText={content}
              setNewContentText={() => setNewContentText}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveContent}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className="row m-1 p-1">
        <div className="col-4 align-self-center">
          <h6>{tags}</h6>
        </div>
        <div className="col-3 align-self-center">
          <button
            className="btn btn-sm btn-outline-info align-self-center"
            onClick={handleShow}
          >
            Edit
          </button>
        </div>
        <div className="col-3 align-self-center">
          <button
            className="btn btn-sm btn-outline-danger align-self-center"
            onClick={handleDelete}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
