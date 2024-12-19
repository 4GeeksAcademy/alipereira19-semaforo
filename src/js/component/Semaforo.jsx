import React, { useState } from "react";
import "./Semaforo.css";

const Semaforo = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="semaforo">
      {/* Div para rojo */}
      <div
        onClick={() => setColor("red")}
        className={`light ${color === "red" ? "red" : ""}`}
      ></div>
      {/* Div para amarillo */}
      <div
        onClick={() => setColor("yellow")}
        className={`light ${color === "yellow" ? "yellow" : ""}`}
      ></div>
      {/* Div para verde */}
      <div
        onClick={() => setColor("green")}
        className={`light ${color === "green" ? "green" : ""}`}
      ></div>
    </div>
  );
};

export default Semaforo;