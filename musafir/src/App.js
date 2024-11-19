import React, { Suspense } from 'react';
const MusafirFlight = React.lazy(() => import("musafirFlight/App"));
const MusafirHotel = React.lazy(() => import("musafirHotel/App"));

const App = () => {

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
      </div>
      <Suspense fallback={<div>.</div>}>
        <MusafirHotel />
      </Suspense>
      <Suspense fallback={<div>.</div>}>
        <MusafirFlight />
      </Suspense>
    </div>
  );
};

export default App;
