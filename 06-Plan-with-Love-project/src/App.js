import React from "react";
import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left </h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refersh</button>
      </div>
    )
  }



  return (
    <div>
      <div className="App"> 
        <Tours tours={tours} removeTour={removeTour} />
      </div>

    </div>
  )
};

export default App;
