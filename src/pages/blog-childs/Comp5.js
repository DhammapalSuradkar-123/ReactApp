import React, { useContext } from "react";
import { ContextData } from "../Blog";

const Comp5 = () => {
  const { carColor, setCarColor } = useContext(ContextData);
  console.log("car color (comp5) : " + carColor);
  return <div>Comp5 Component</div>;
};

export default Comp5;
