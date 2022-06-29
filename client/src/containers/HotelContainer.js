import React, { useState, useEffect } from 'react';
import BookingList from '../components/BookingList';
import { getBookings, deleteBooking as apiDeleteBooking } from '../services/services';
import BookingForm from '../components/BookingForm';

function HotelContainer() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        getBookings()
            .then((data) => {
                setBookings(data)
            })
    }, []);

    const addBooking = (booking) => {
        let temp = bookings.map(b => b);
        temp.push(booking);
        setBookings(temp);
    }

    const deleteBooking = (id) => {
        apiDeleteBooking(id).then(() => {
            let temp = bookings.map(b => b);
            const toDel = bookings.map(b => b._id).indexOf(id);
            temp.splice(toDel, 1);
            setBookings(temp);
        });
    }

    if (!bookings) return <h2>Loading</h2>
    return (
        <div className='Container'>
            <h1>Hotel Bookings</h1>
            <BookingList bookings={bookings} deleteBooking={deleteBooking} />
            <BookingForm addBooking={addBooking} />
        </div>

    )

}

export default HotelContainer;