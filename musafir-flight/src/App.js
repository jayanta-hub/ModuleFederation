import React, { useEffect, useState } from "react";
import FlightListing from "./FlightListing";
const url = "https://jsonplaceholder.typicode.com/photos";
export default function App() {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    setIsPending(true);
    await fetch(url)
      .then((res) => res.json())
      .then((res) => setApiData(res.map(() => {
        return {
        airline: 'Air India',
          flightNumber: 'AI-101',
            departure: 'New Delhi',
              arrival: 'Mumbai',
                price: 'INR 5,000'
              }})))
      .catch((err) => setError(err));

    setIsPending(false);
  };
  // throw new Error("hhjbhj");
  console.log("apiData.", apiData.map(() => {
    return {
    airline: 'Air India',
      flightNumber: 'AI-101',
        departure: 'New Delhi',
          arrival: 'Mumbai',
            price: 'INR 5,000'
          }}), error);
  // if (isPending) {
  //   return <h1>Loading..</h1>;
  // }
  return (
    <div className="App">
      <h1>Musafir Flight</h1>
      <FlightListing flights={apiData} />
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: "10px",
        }}
      >
      </div>
    </div>
  );
}
