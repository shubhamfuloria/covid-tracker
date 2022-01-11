import React from "react";
import "./Report.css";

function Report(props) {


  return (
    <>
      <div className="report_card">
        <h1>{props.stateName}</h1>
        <div>
          <span>Confirmed Cases:</span> <span id="conf">{props.confirmed}</span>
        </div>
        <div>
          Recovered: <span>{props.recovered}</span>
        </div>
        <div>
          Deaths: <span>{props.deaths}</span>
        </div>
      </div>
    </>
  );
  /*
      INDIA
  Confirmed : 200
  Recovered : 100
  Deaths    : 500  
  */
}

export default Report;
