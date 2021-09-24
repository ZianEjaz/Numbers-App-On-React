import React from "react";

const DataDisplay = (props) => {

    const data = props.data.map((x, index)=>{
       return <p key={index}>{x.numbers}</p>
   })

  return (
  <div>

      {data}
  </div>
  )
};

export default DataDisplay;
