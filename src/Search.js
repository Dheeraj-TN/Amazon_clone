import React, { useState } from "react";
import { data } from "./Data";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <h1>I am the search page</h1>
      <div className="template__container">
        {/* {data
          .filter((item) => {
            if (searchItem.replace(/\s/g, "") === "") {
              return false;
            }
            return item.title.toLowerCase() === ""
              ? ""
              : item.title.toLowerCase().includes(searchItem);
          }) */}
        {searchResults.map((item, index) => (
          <tr>
            key={index}
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
          </tr>
        ))}
      </div>
    </div>
  );
}

export default Search;
