import React, { useState } from "react";
import "./Search.css";

/*
const baseURL = "https://data.covid19india.org/v4/min/data.min.json";

const handleSearch = (state) => {
  const stateCode = states[state];
  axios.get(baseURL).then((response) => {
    const dataObj = response.data[stateCode];
    const confirmed = dataObj.total.confirmed;
//     document.getElementById("conf").innerText = confirmed;
    // console.log(confirmed);
  });
};
*/



function Search(props) {

    const searchBtnHandler = () => {
    var searchedValue = document.querySelector('.search_box__input').value;
    props.fetchData(searchedValue);

  }


  return (
    <>
      <div className="search_box">
        <input className="search_box__input" type="text" placeholder="Enter an indian state in 'Delhi' format"></input>
        <button onClick = {searchBtnHandler}>Search</button>
      </div>
    </>
  );
}

export default Search;
