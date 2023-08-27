import React from "react";

export default function Exported({
  setExported,
  data,
  hierarchyComponents,
  setData,
  getContent,
}) {
  return (
    <div className="container">
      <div
        className="btn btn-sm btn-warning"
        onClick={() => setExported(false)}
      >
        Back
      </div>
      <div class="markdown-body">
        <pre>
          <code class="language-javascript">{data}</code>
        </pre>
      </div>
    </div>
  );
}
