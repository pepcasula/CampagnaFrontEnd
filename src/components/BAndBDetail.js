import React from 'react';
import BookingForm from './BookingForm';
import bookingService from './../services/BookingServices'

const BAndBDetail = ({selectedBAndB}) => {

  const createBooking = (newBooking) => {
    console.log(newBooking);
    bookingService.postBooking(newBooking)
  }
  const bandbId = selectedBAndB.id

  return (
      
      <div>
          <h3>{selectedBAndB.name}</h3>
          <p>{selectedBAndB.email}</p>
          <BookingForm createBooking={createBooking} bandbId={bandbId}/>
      </div>
  )
}

export default BAndBDetail;