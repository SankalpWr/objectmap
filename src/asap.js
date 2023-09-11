import React from "react";

const asap = () => {
  const obj = [
    {
      id: 1,
      name: "sankalp"
    },
    {
      id: 2,
      name: "kumar"
    },
    {
      id: 3,
      name: "xjs"
    }
  ];
  return (
    <div>
      {obj.map((val) => {
        return <div key="val.id">{val.name}</div>;
      })}
    </div>
  );
};

export default asap;
