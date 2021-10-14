import React from "react";

function Search(props) {


  return (
<div className="p-2 mt-8 rounded-2xl w-full shadow-3xl">
      <input
      onChange={props.function}
        className="w-full p-3 placeholder-gray-500 text-gray-900 rounded-xl sm:text-sm"
        type={props.type}
        name="search"
        placeholder={props.placeholder}
      ></input>
</div>
  );
}

export default Search;
