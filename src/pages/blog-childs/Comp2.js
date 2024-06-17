import React, { useContext } from "react";
import Comp3 from "./Comp3";
import { ContextData } from "../Blog";

const Comp2 = () => {
  const { carColor, setCarColor } = useContext(ContextData);
  console.log("car color (comp2) : " + carColor);
  return (
    <div>
      Comp2 Component
      <Comp3 />
    </div>
  );
};

export default Comp2;
