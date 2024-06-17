import React, { memo } from "react";

const Content = ({ data }) => {
  console.log("child content render");

  return (
    <>
      <ul>{data.length && data.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </>
  );
};

export default memo(Content);
