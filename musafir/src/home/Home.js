import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "greenyellow",
      }}
    >
      <h1>Musafir</h1>
      <button onClick={() => navigate( "/mufafir-flight")}>MusafirFlight</button>
      <button onClick={() => navigate( "/mufafir-hotel")}>MusafirHotel</button>
    </div>
  </div>
  )
}

export default Home