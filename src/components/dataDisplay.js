import React from "react";
import CopyButton from "./copyButton";

const DataDisplay = (props) => {
  
  return (
    
    <>
      {props.data.length > 0 ? (
        <div className="bg-grey-900 rounded-xl p-8 md:m-8 max-h-80 overflow-y-scroll scrl-bar-cstm-purple relative shadow-3xl text-white mt-6 shadow-sucess-3xl" >
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
        <p className="rounded-2xl p-8 m-8 shadow-3xl shadow-fail-3xl bg-grey-900 text-white">No Data Found</p>
      )}
      
      
    </>
  );
};

export default DataDisplay;
