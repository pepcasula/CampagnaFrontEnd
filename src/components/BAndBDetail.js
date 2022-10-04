import React from 'react';
import BookingForm from './BookingForm';
import bookingService from './../services/BookingServices';
import styled from 'styled-components';


const BookingDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: rgb(200, 212, 255);
  font-size: 1.25em;
  color: rgb(0, 49, 102);
  margin: 2em;
  padding: 0.8em;
  border-radius: 0.4em;
  border: 1px black;
  color: navy;
  text-decoration: none;
  `

const Details = styled.div`
color: rgb(0, 49, 102);
text-decoration: none;
`


const Image = styled.img`
margin-left: 10px;
`

const BAndBDetail = ({selectedBAndB}) => {

  const createBooking = (newBooking) => {
    console.log(newBooking);
    bookingService.postBooking(newBooking)
  }
  const bandbId = selectedBAndB.id

  return (
      
      <BookingDetail>
        <Details> 
          <h3>{selectedBAndB.name}</h3>
          {selectedBAndB.email}
          <BookingForm createBooking={createBooking} bandbId={bandbId}/>
        </Details>       
          <div>
            <Image width="230px" src={`/images/${selectedBAndB.imageUrl2}`}/>
            <Image width="230px" src={`/images/${selectedBAndB.imageUrl}`}/>
          </div>
      </BookingDetail>
  )
}

export default BAndBDetail;