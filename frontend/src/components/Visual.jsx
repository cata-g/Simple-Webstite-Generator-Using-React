import React from "react";

export default function Visual({ id, name, content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}
