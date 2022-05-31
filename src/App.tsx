import React from "react";
import "./styles/App.css"; 

const App: React.FC = () => {
  return (
    <>
      <div id="map">
        <p>Please enter an address</p>
      </div>
      <form>
        <input type="text" id="address"></input>
        <button type="submit">search address</button>
      </form>
    </>
  );
};

export default App;
