import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

export default function TextAlignment({
  newAlign,
  setNewAlign,
  isLeft,
  isRight,
  isCenter,
  setLeft,
  setRight,
  setCenter,
}) {
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
        setCenter(!isCenter);
        if (isCenter) goDefaultAlgn();
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

  function goDefaultAlgn() {
    setCenter(true);
    setLeft(false);
    setRight(false);
    setNewAlign("text-center ");
  }
  return (
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
  );
}
