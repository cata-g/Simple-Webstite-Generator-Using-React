import React from "react";
import HierarchyComponent from "../HierarchyComponent";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Components from "../Components";
import Visual from "../Visual";
export default function NotExported({
  setHierarchyComponents,
  hierarchyComponents,
  getContent,
  buttons,
  handleExport,
}) {
  const handleAddInHierarchy = (component) => {
    let comp = {
      id: hierarchyComponents.length,
      name: component.name + hierarchyComponents.length,
      content: component.content,
      text: component.text,
      tags: component.tags,
      style: component.style,
    };
    const updateComps = [...hierarchyComponents, comp];
    setHierarchyComponents(updateComps);
  };

  const handleRemoveFromHierarchy = (name) => {
    const updateComps = [...hierarchyComponents].filter(
      (comp) => comp.name !== name
    );
    setHierarchyComponents(updateComps);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(hierarchyComponents);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    setHierarchyComponents(items);
  };

  const handleEditContent = (
    newContent,
    id,
    tags,
    newText,
    style,
    cap,
    algn
  ) => {
    let items = [...hierarchyComponents];
    if (typeof algn === "undefined") algn = "";
    if (typeof style === "undefined") style = "";
    if (typeof cap === "undefined") cap = "";
    items.forEach((element) => {
      if (element.id === id) {
        element.text = newText;
        element.content = getContent(
          newContent,
          tags,
          newText,
          style,
          cap,
          algn
        );
      }
    });

    setHierarchyComponents(items);
  };

  return (
    <div className="content">
      <div className="row">
        <div className="components col-md-2">
          <h1 className="p-1 m-1">Components</h1>
          {buttons.map((btn, i) => (
            <Components
              id={i}
              name={btn.name}
              text={btn.text}
              content={btn.content}
              handleAdd={() => handleAddInHierarchy(btn)}
            />
          ))}
        </div>
        <div className="hierarchy col-md-2">
          <h1 className="p-1 m-1">Hierarchy</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {hierarchyComponents.length !== 0 &&
                    hierarchyComponents.map((item, index) => (
                      <Draggable
                        key={item.name}
                        draggableId={item.name}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <HierarchyComponent
                              id={index}
                              name={item.name}
                              content={item.content}
                              tags={item.tags}
                              style={item.style}
                              handleDelete={() =>
                                handleRemoveFromHierarchy(item.name)
                              }
                              handleEditComponent={handleEditContent}
                              cap={item.cap}
                              text={item.text}
                              alignment={item.alignment}
                              isTable={item.isTable}
                              isList={item.isList}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="visualisation col-md-8 bg-light">
          <div className="row p-1 m-1">
            <div className="col-10 align-self-center">
              <h1>Visual</h1>
            </div>
            <div className="col-2 align-self-center">
              <button
                className="btn btn-warning"
                style={{ color: "white" }}
                onClick={handleExport}
              >
                Export
              </button>
            </div>
          </div>
          {hierarchyComponents.length !== 0 &&
            hierarchyComponents.map((btn, i) => (
              <Visual
                id={i}
                name={btn.name}
                content={
                  btn.content === ""
                    ? getContent(
                        btn.content,
                        btn.tags,
                        btn.text,
                        btn.style,
                        btn.capitalization,
                        btn.alignment
                      )
                    : btn.content
                }
                text={btn.text}
                style={btn.style}
                capitalization={btn.capitalization}
                alignment={btn.alignment}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
