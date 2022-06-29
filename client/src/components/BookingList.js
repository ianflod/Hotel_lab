// import React from "react";
import Booking from './Booking';

const BookingList = ({ bookings, deleteBooking }) => {
    const allBookings = bookings.map((booking) => {
        return <Booking booking={booking} key={booking._id} removeBooking={deleteBooking} />

    })

    return (
        <>
            {allBookings}
        </>
    )

}

export default BookingList;