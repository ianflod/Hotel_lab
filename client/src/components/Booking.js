import { deleteBooking } from "../services/services";

const Booking = ({ booking, removeBooking }) => {

    // console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    return (
        <div>
            <h3>{booking.name}</h3>
            <h5>{booking.email}</h5>
            <h5>Checked In?: {String(booking.checkIn)}</h5>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </div>

    )

}

export default Booking;