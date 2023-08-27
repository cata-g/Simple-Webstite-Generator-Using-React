import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItalic, faBold } from "@fortawesome/free-solid-svg-icons";

export default function TextStyle({
  newStyle,
  setNewStyle,
  isBold,
  isItalic,
  setBold,
  setItalic,
}) {
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
        if (isBold) {
          if (isItalic) setNewStyle("fst-italic ");
          else setNewStyle("fw-normal ");
        }
        break;
      case 1:
        addStyle("fst-italic ");
        setItalic(!isItalic);
        if (isItalic) {
          if (isBold) setNewStyle("fw-bold ");
          else setNewStyle("fw-normal ");
        }
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
        onClick={() => handleTextStyle(1)}
      >
        <FontAwesomeIcon icon={faItalic} />
      </Button>
    </ButtonGroup>
  );
}
