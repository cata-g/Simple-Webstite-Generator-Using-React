import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function InputArea({ newContentText, setNewContentText }) {
  return (
    <InputGroup className="mt-3">
      <InputGroup.Text>Textarea</InputGroup.Text>
      <Form.Control
        as="textarea"
        aria-label="With textarea"
        onChange={(e) => setNewContentText(e.target.value)}
        value={newContentText}
        onClick={() => console.log(newContentText)}
      />
    </InputGroup>
  );
}
