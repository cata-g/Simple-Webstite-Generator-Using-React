import React, { useState } from "react";
import "./Creator.css";

import { BUTTONS } from "./utils/buttons";
import Exported from "./screens/Exported";
import NotExported from "./screens/NotExported";

const buttons = BUTTONS;

export default function Creator() {
  const [hierarchyComponents, setHierarchyComponents] = useState([]);
  const [isExported, setExported] = useState(false);
  const [data, setData] = useState("");
  const getContent = (newContent, tags, newText, style, cap, algn) => {
    if (typeof algn === "undefined") algn = "";
    if (typeof style === "undefined") style = "";
    if (typeof cap === "undefined") cap = "";
    const cont =
      "<" +
      tags +
      " class= " +
      '"' +
      style +
      cap +
      algn +
      '"' +
      ">" +
      newText +
      "<" +
      "/" +
      tags +
      ">";
    return cont;
  };

  const handleExport = () => {
    const header = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    </head>
    <body>
      <div class="container">
    `;
    let body = "";
    hierarchyComponents.forEach((element) => {
      body += "         ";
      console.log(element);
      if (element.content === "")
        body += getContent(
          element.content,
          element.tags,
          element.text,
          element.style,
          element.capitalization,
          element.alignment
        );
      else body += element.content;
      body += "\n";
    });
    const footer = ` 
      </div>     
      <!-- jQuery library -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

      <!-- Latest compiled JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </body>
  </html>;`;
    setData(header + "\n" + body + "\n" + footer + "\n");
    setExported(true);
  };
  return (
    <>
      {!isExported && (
        <NotExported
          setHierarchyComponents={setHierarchyComponents}
          hierarchyComponents={hierarchyComponents}
          getContent={getContent}
          buttons={buttons}
          handleExport={handleExport}
        />
      )}
      {isExported && (
        <Exported
          setExported={setExported}
          data={data}
          hierarchyComponents={hierarchyComponents}
          setData={setData}
          getContent={getContent}
        />
      )}
    </>
  );
}
