import React, { createContext } from "react";
import Comp1 from "./blog-childs/Comp1";

export const ContextData = createContext();

const Blog = () => {
  const [carColor, setCarColor] = React.useState("Red");

  return (
    <ContextData.Provider value={{ carColor, setCarColor }}>
      <div>
        Blog Page
        <div>
          <Comp1 />
        </div>
      </div>
    </ContextData.Provider>
  );
};

export default Blog;
