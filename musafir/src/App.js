import React, { Suspense } from 'react';
import Home from './home/home';
import {
  Navigate,
  Route,
  BrowserRouter as Routers,
  Routes
} from "react-router-dom";
import Hotel from './hotel/Hotel';
import Flight from './flight/Flight';
const App = () => {
  console.log("first")

  return (
    <Routers>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/** Public Routes */}
          <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
          <Route path={"/dashboard"} element={<Home />} />
          <Route path={"/mufafir-flight"} element={<Hotel />} />
          <Route path={"/mufafir-hotel"} element={<Flight />} />
        </Routes>
      </Suspense>
    </Routers>
  );
};

export default App;


