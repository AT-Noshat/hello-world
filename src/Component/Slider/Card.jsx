import React from "react";

const Card = () => {
  return (
    <div
      className="h-96 mx-auto rounded-2xl w-full bg-black p-4"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the transparency as needed
      }}
    >
      <p className="text-white">Hello</p>
    </div>
  );
};

export default Card;
