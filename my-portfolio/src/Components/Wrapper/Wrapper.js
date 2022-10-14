import React from "react";

const Wrapper = ({ comp: Component, ...rest }) => {
  return (
    <div className="container">
      {" "}
      <Component />
    </div>
  );
};

export default Wrapper;
