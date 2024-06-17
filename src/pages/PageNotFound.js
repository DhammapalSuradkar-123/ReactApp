import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      Page Not Found...404 <Link to="/">back to home page</Link>
    </div>
  );
};

export default PageNotFound;
