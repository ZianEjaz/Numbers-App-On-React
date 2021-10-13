import React from "react";

function Search(props) {


  return (
<div className="p-5 mt-8 bg-purple-600 rounded-2xl w-full">
      <input
      onChange={props.function}
        className="w-full p-3 placeholder-gray-500 text-gray-900 rounded-lg sm:text-sm"
        type={props.type}
        name="search"
        placeholder={props.placeholder}
      ></input>
</div>
  );
}

export default Search;
