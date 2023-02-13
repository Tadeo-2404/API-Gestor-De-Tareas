import { useState, useContext } from "react";
import { Context } from "../context/ContextProvider";

const Inicio = () => {
  const { tareas } = useContext(Context);
  console.log(tareas);
  return (
    <div>Inicio</div>
  )
}

export default Inicio