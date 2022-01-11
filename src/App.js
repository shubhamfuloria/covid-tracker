import React, {useState} from "react";
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Report from './components/Report/Report';
import States from './components/states.json'

function App() {

  let [stateName, setStateName] = useState('State');
  let [confirmed, setConfirmed] = useState(0);
  let [recovered, setRecovered] = useState(0);
  let [deaths, setDeaths] = useState(0);

const baseURL = "https://data.covid19india.org/v4/min/data.min.json";
  const getData = (stateName) => {
    var stateCode = States[stateName]; 
    fetch(baseURL)
      .then((res) => res.json())
      .then(res => {
        setConfirmed(res[stateCode].total.confirmed);
        setRecovered(res[stateCode].total.recovered);
        setDeaths(res[stateCode].total.deceased);
        setStateName(stateName);
      })
  }


  return (
    <>
      <Header heading="COVID-19 Tracker" />
      <Search fetchData = {getData}/>
      <Report stateName = {stateName} confirmed = {confirmed} recovered = {recovered} deaths = {deaths}/>
    </>
  )
}

export default App;
