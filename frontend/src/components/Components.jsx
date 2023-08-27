import React from "react";
import "./Components.css";

export default function Components({ id, name, text, handleAdd }) {
  return (
    <div className="row m-1 p-1">
      <div className="col-3 align-self-center">
        <h5>{name}</h5>
      </div>
      <div className="col-5 align-self-center">
        <h6>{text}</h6>
      </div>
      <div className="col-4 align-self-center">
        <button
          class="btn btn-sm btn-outline-primary align-self-center"
          onClick={handleAdd}
        >
          Click
        </button>
      </div>
    </div>
  );
}
