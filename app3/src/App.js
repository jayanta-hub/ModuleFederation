import React, { useEffect, useState } from "react";
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
      .then((res) => setApiData(res))
      .catch((err) => setError(err));

    setIsPending(false);
  };
  // throw new Error("hhjbhj");
  console.log("apiData.", apiData, error);
  if (isPending) {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
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
        {apiData.length > 0 &&
          apiData?.map((val) => (
            <img
              key={val.id}
              src={val?.thumbnailUrl}
              alt={val.title}
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
              }}
              tabIndex="0" // Makes the image focusable
            />
          ))}
      </div>
    </div>
  );
}
