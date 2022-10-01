import { useState } from "react"


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

    return (<>
    <form onSubmit={handleSubmit}>
        <input type='date' id="startDate" value={startDate} onChange={handleStartDate} required/>
        <input type='date' id="endDate" value={endDate} onChange={handleEndDate}  required/>
        <input type='number' id="numberOfGuests" value={numberOfGuests} onChange={handleNumberOfGuests} required/>
        <input type="submit" name="submit" value="Send request to host" />
    </form>
    </>)
}

export default BookingForm