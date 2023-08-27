import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItalic, faBold } from "@fortawesome/free-solid-svg-icons";

export default function TextStyle(newStyle, setNewStyle) {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);

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

  return (
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
  );
}
