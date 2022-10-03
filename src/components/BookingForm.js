import { useState } from "react"
import styled from "styled-components";

const BookingItem = styled.div`
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

const BookingForm = ({createBooking, bandbId}) => {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [numberOfGuests, setNumberOfGuests] = useState(0)

    const handleStartDate = (evt) => setStartDate(evt.target.value)
    const handleEndDate = (evt) => setEndDate(evt.target.value)
    const handleNumberOfGuests = (evt) => setNumberOfGuests(evt.target.value)

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(bandbId);
        const booking = {
            bandb : { id : bandbId },
            startDate,
            endDate,
            numberOfGuests
        }
        createBooking(booking)
        setEndDate("")
        setStartDate("")
        setNumberOfGuests(0)
    }

    return (<BookingItem>
    <form onSubmit={handleSubmit}>
        <input type='date' id="startDate" value={startDate} onChange={handleStartDate} required/>
        <input type='date' id="endDate" value={endDate} onChange={handleEndDate}  required/>
        <input type='number' id="numberOfGuests" value={numberOfGuests} onChange={handleNumberOfGuests} required/>
        <input type="submit" name="submit" value="Send request to host" />
    </form>
    </BookingItem>)
}

export default BookingForm