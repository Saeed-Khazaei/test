import React from "react";

const Greet = ({ name = "" }: { name?: string }) => {
  return <div>{`hello ${name}`}</div>;
};

export default Greet;
