import React from "react";
import CopyButton from "./copyButton";

const DataDisplay = (props) => {
  
  return (
    
    <>
      {props.data.length > 0 ? (
        <div className="bg-gray-950 rounded-xl p-8 md:m-8 max-h-80 overflow-y-scroll scrl-bar-cstm-purple relative shadow-3xl text-white min-h-screen">
         <CopyButton data={props.data}/>

          {props.data.map((item, index) => (
            <p
              key={index}
              style={{ whiteSpace: "pre-line" }}
              className="text-2xl"
            >
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="bg-red-500 rounded-2xl p-8 m-8 shadow-3xl">No Data Found</p>
      )}
      
      
    </>
  );
};

export default DataDisplay;
