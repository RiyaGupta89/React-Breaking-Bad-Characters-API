import React, { useState } from "react";

const Search = ({getQuery}) => {
  const [text, setText] = useState("");
  

  const onchange = (e) => {
    setText(e.target.value);
    getQuery(e.target.value)
    console.log(text)
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search characters..."
          onChange={onchange}
          value={text}
          autoFocus
        />
      </div>
    </>
  );
};

export default Search;
