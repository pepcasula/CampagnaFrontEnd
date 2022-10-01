const baseURL = 'http://localhost:8080/bookings'

const bookingServices = {

    postBooking(payload){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }
}

export default bookingServices