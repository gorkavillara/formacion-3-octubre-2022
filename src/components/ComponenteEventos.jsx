import React, { useState, useRef } from "react";

const ComponenteEventos = () => {
  const [draggingOver, setDraggingOver] = useState(false);
  const handleClick = () => {
    // alert("Click!")
    console.log("Click y focuseamos el input");
    console.log(inputRef.current.value);
    inputRef.current.scrollIntoView({ behaviour: "smooth" })
  };

  const inputRef = useRef();
  const imgRef = useRef();

  const droppingImage = () => {
    console.log(imgRef.current)
  }

  return (
    <div>
      <h1>Gestión de Eventos</h1>
      <button onClick={handleClick}>Click me!</button>
      <br />
      <button onDoubleClick={() => alert("Doble click")}>
        Double click me!
      </button>
      <br />
      <input
        type="text"
        ref={inputRef}
        placeholder="Tu nombre"
        onKeyDown={console.log}
        onKeyUp={console.log}
      />
      <br />
      <button
        style={{ padding: "10px 20px", borderRadius: "10px" }}
        onMouseEnter={() => console.log("Hover iniciado")}
        onMouseOver={() => console.log("Hovering...")}
        onMouseLeave={() => console.log("Hover terminado")}
        onMouseDown={console.log}
        onMouseUp={console.log}
        onClick={console.log}
      >
        Hover me
      </button>
      <br />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/KMines.png/203px-KMines.png"
        alt=""
        onDragStart={console.log}
        onDragEnd={console.log}
        // onDrag={() => console.log("Dragging..")}
        ref={imgRef}
      />
      <div
        style={{
          width: 250,
          height: 250,
          border: "dashed 2px red",
          backgroundColor: draggingOver ? "blue" : "transparent",
        }}
        onDragEnter={() => setDraggingOver(true)}
        onDragLeave={() => setDraggingOver(false)}
        onDrop={droppingImage}
      ></div>
    </div>
  );
};

export default ComponenteEventos;
