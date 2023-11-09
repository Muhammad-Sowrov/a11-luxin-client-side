import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import BookedRoom from "./BookedRoom";


const MyRooms = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setBookings(data)
        })
    },[url])
    return (
        <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold text-center">Room You Booked</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    bookings.map(book => <BookedRoom key={book._id} book={book}></BookedRoom>)
                }
            </div>
        </div>
    );
};

export default MyRooms;