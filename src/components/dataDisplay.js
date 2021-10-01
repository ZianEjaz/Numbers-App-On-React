import React from "react";

const DataDisplay = (props) => {
  return (
    <>
      {props.data.length > 0 ? (
        <div className="bg-purple-500 rounded-2xl p-8 m-8 max-h-80 overflow-y-scroll scrl-bar-cstm-purple">
          {props.data.map((item, index) => (
            <p key={index} style={{ whiteSpace: "pre-line" }} className="text-2xl">
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="bg-red-600 rounded-2xl p-8 m-8">No Data Found</p>
      )}
    </>
  );
};

export default DataDisplay;
