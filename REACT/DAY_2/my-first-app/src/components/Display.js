import React from "react";

const Display = ({ count }) => {
  return (
    <p>
      I have clicked {count} time{count === 1 ? "" : "s"}.
    </p>
  );
};

export default Display;
