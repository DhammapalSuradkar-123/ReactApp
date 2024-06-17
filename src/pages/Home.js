import React from "react";
import Content from "./Content";

const Home = () => {
  const [data, setData] = React.useState([
    "Cricket",
    "Football",
    "Batminton",
    "chess",
  ]);
  const [item, setItem] = React.useState("");
  const [count, setCount] = React.useState(0);

  const handleAddItem = () => {
    if (!item) {
      console.log("please enter the item");
    } else {
      const newData = [...data, item];
      setData(newData);
    }
  };

  console.log("parent home render");

  return (
    <div>
      <h3>Home Page</h3>
      <Content data={data} />
      <div>
        <p>Count : {count}</p>
        <button onClick={(e) => setCount(count + 1)}>+</button>
      </div>
      <br />
      <div>
        <input type="text" onChange={(e) => setItem(e.target.value)} />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default Home;
