import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from "react";
function App() {
  const [place,setPlace]=useState(""); 
  const [placeData, setPlaceData]=useState({});
  const updatePlaceData=()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=06c51334044f4ddba98191926211808&q=${place}`)
    .then((res)=> res.json())
    .then((data)=>{
      setPlaceData(data);
    });
  }
  return (
    <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input type="text" value={place} onChange={(e)=>{
            setPlace(e.target.value);}}/>
          <button className="btn btn-primary"
          onClick={updatePlaceData}>Submit</button>
        </div>
        <div className="offset-md-4 col-12 col-md-4 weather">
        <div className="card">
          {placeData.location? (<div>
          <img src={placeData.current.condition.icon}/>
          <h1>{placeData.location.name}</h1>
          <h1>{placeData.location.region}</h1>
          <h1>{placeData.location.country}</h1>
          </div>):
          (<h2>Place not found</h2>)}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
