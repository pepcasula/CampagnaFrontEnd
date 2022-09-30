import React from 'react';
import CampagnaContainer from './containers/CampagnaContainer';
import bookingService from './../services/BookingServices'

function App() {

  return (
    <div className="App">
      <h1>Campagna Frontend App</h1>
     <CampagnaContainer />
    </div>
  );
}

export default App;
