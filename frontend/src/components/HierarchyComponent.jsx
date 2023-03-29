import React, { useState } from "react";
import "./Components.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

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
  isTable,
  isList,
  text,
}) {
  const [showModal, setShowModal] = useState(false);
  const [newContentText, setNewContentText] = useState(text);
  const [newCap, setNewCap] = useState(cap);
  const [newAlign, setNewAlign] = useState(alignment);
  const [newStyle, setNewStyle] = useState("");
  const [colNo, setColNo] = useState(3);
  const [rowNo, setRowNo] = useState(3);

  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isLeft, setLeft] = useState(false);
  const [isRight, setRight] = useState(false);
  const [isCenter, setCenter] = useState(true);
  const [isLower, setLower] = useState(false);
  const [isUpper, setUpper] = useState(false);
  const [isCap, setCap] = useState(true);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const addStyle = (style) => {
    let actualStyle = newStyle;
    actualStyle += style;
    setNewStyle(actualStyle);
  };
  const handleTextStyle = (id) => {
    switch (id) {
      case 0:
        addStyle("fw-bold ");
        setBold(!isBold);
        if (isBold) setNewStyle("fw-normal ");
        break;
      case 1:
        setNewStyle("fw-normal ");
        break;
      case 2:
        addStyle("fst-italic ");
        setItalic(!isItalic);
        if (isItalic) setNewStyle("fw-normal ");
        break;
      default:
        break;
    }
  };

  function goDefaultAlgn() {
    setCenter(true);
    setLeft(false);
    setRight(false);
    setNewAlign("text-center ");
  }

  function goDefaultCap() {
    setCap(true);
    setLower(false);
    setUpper(false);
    setNewCap("text-capitalize ");
  }

  const handleTextAlg = (id) => {
    switch (id) {
      case 0:
        setNewAlign("text-start ");
        setLeft(!isLeft);
        setCenter(false);
        setRight(false);
        if (isLeft) goDefaultAlgn();
        break;
      case 1:
        setNewAlign("text-center ");
        setLeft(false);
        setRight(false);
        break;
      case 2:
        setNewAlign("text-end ");
        setLeft(false);
        setCenter(false);
        setRight(!isRight);
        if (isRight) goDefaultAlgn();
        break;
      default:
        break;
    }
  };

  const handleTextCap = (id) => {
    switch (id) {
      case 0:
        setNewCap("text-lowercase ");
        setLower(!isLower);
        setCap(false);
        setUpper(false);
        if (isLower) goDefaultCap();
        break;
      case 1:
        setNewCap("text-uppercase ");
        setLower(false);
        setCap(false);
        setUpper(!isUpper);
        if (isUpper) goDefaultCap();
        break;
      case 2:
        setNewCap("text-capitalize ");
        setLower(false);
        setUpper(false);
        break;
      default:
        break;
    }
  };

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

  const setRowNumber = (rows) => {
    setRowNo(rows);
  };

  const setColNumber = (cols) => {
    setColNo(cols);
  };

  return (
    <>
      {showModal && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{tags}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ButtonGroup aria-label="Text Style">
              <Button
                variant={isBold ? "secondary" : "light"}
                onClick={() => handleTextStyle(0)}
              >
                <FontAwesomeIcon icon={faBold} />
              </Button>
              <Button
                variant={isItalic ? "secondary" : "light"}
                onClick={() => handleTextStyle(2)}
              >
                <FontAwesomeIcon icon={faItalic} />
              </Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Text Transform">
              <Button
                variant={isLower ? "secondary" : "light"}
                onClick={() => handleTextCap(0)}
              >
                abc
              </Button>
              <Button
                variant={isUpper ? "secondary" : "light"}
                onClick={() => handleTextCap(1)}
              >
                ABC
              </Button>
              <Button
                variant={isCap ? "secondary" : "light"}
                onClick={() => handleTextCap(2)}
              >
                Cap
              </Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Text Alignment">
              <Button
                variant={isLeft ? "secondary" : "light"}
                onClick={() => handleTextAlg(0)}
              >
                <FontAwesomeIcon icon={faAlignLeft} />
              </Button>
              <Button
                variant={isCenter ? "secondary" : "light"}
                onClick={() => handleTextAlg(1)}
              >
                <FontAwesomeIcon icon={faAlignCenter} />
              </Button>
              <Button
                variant={isRight ? "secondary" : "light"}
                onClick={() => handleTextAlg(2)}
              >
                <FontAwesomeIcon icon={faAlignRight} />
              </Button>
            </ButtonGroup>

            <InputGroup className="mt-3">
              <InputGroup.Text>Textarea</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                onChange={(e) => setNewContentText(e.target.value)}
                value={newContentText}
              />
            </InputGroup>
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
