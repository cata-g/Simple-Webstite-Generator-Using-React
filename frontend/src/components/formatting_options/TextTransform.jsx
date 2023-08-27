import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/esm/Button";

export default function TextTransform(newCap, setNewCap) {
  const [isLower, setLower] = useState(false);
  const [isUpper, setUpper] = useState(false);
  const [isCap, setCap] = useState(true);

  function goDefaultCap() {
    setCap(true);
    setLower(false);
    setUpper(false);
    setNewCap("text-capitalize ");
  }

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
  return (
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
  );
}
