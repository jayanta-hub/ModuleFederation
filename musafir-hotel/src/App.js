import React from 'react';
import HotelListing from './HotelListing';

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>Musafir Hotel</h1>
      <HotelListing />
    </div>
  );
};

export default App;
