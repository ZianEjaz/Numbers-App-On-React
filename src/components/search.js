import React from "react";

function Search(props) {


  return (
<>
      <input
      onChange={props.searchNumbers}
        className="w-full p-3 placeholder-gray-500 text-gray-900 rounded-lg sm:text-sm"
        type="number"
        name="search"
        placeholder="Enter a Number to search from inported file"
      ></input>
</>
  );
}

export default Search;
