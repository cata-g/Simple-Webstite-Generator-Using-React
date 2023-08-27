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

  // Style
  const [newStyle, setNewStyle] = useState("");
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);

  // Cap
  const [newCap, setNewCap] = useState(cap);
  const [isLower, setLower] = useState(false);
  const [isUpper, setUpper] = useState(false);
  const [isCap, setCap] = useState(true);

  // Align
  const [newAlign, setNewAlign] = useState(alignment);
  const [isLeft, setLeft] = useState(false);
  const [isRight, setRight] = useState(false);
  const [isCenter, setCenter] = useState(true);

  // Input Text
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
            <TextStyle
              newStyle={newStyle}
              setNewStyle={setNewStyle}
              isBold={isBold}
              isItalic={isItalic}
              setBold={setBold}
              setItalic={setItalic}
            />
            <TextTransform
              newCap={newCap}
              setNewCap={setNewCap}
              isLower={isLower}
              isUpper={isUpper}
              isCap={isCap}
              setLower={setLower}
              setCap={setCap}
              setUpper={setUpper}
            />
            <TextAlignment
              newAlign={newAlign}
              setNewAlign={setNewAlign}
              isLeft={isLeft}
              isRight={isRight}
              isCenter={isCenter}
              setLeft={setLeft}
              setCenter={setCenter}
              setRight={setRight}
            />
            <InputArea
              newContentText={newContentText}
              setNewContentText={setNewContentText}
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
