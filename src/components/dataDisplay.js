import React from "react";

const DataDisplay = (props) => {
  return (
    <div className="bg-gray-600 rounded-2xl p-8">
      {props.data.map((item, index) => (
        <p key={index} style={{ whiteSpace: "pre-line" }}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default DataDisplay;
