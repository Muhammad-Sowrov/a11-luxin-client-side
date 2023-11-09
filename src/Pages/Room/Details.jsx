import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import axios from "axios";

const Details = () => {
  const currentUser = useContext(AuthContext);
  const roomDetails = useLoaderData();
  const {
    _id,
    image,
    description,
    pricePerNight,
    roomSize,
    isAvailable,
    roomName,
    beds,
    amenities,
    rating,
  } = roomDetails;

  const user = currentUser?.user;
  const email = user?.email;
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const checkIn = form.checkIn.value;
    const checkOut = form.checkOut.value;
    const bookingData = {
      checkIn: checkIn,
      checkOut: checkOut,
      roomName,
      roomId: _id,
      email: email,
      image: image,
      beds: beds,
      price: pricePerNight,
    };
    console.log(bookingData);


    // axios.post('http://localhost:5000/bookings', bookingData)
    // .then(data => {
    //   console.log(data.data);
    // })

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookingData)
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data);
      if (data.insertedId) {
        alert('Booking Successful')
      }
    })




  };

  return (
    <div className="container mx-auto px-5 my-10">
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
        <div>
          <div className="cad w-full h-full bg-base-100 shadow-xl px-5 py-5">
            <figure className="flex items-center justify-center">
              <img
                src={image}
                alt="room-photo"
                className="rounded-xl w-full h-full"
              />
            </figure>
          </div>
        </div>
        <div>
          <form onSubmit={handleBook}>
            <div className="card -96 bg-base-100 shadow-xl px-5 py-5 relative">
              <div>
                <p className="bg-slate-100 rounded-lg p-4 mb-3">
                  Name: <span className="text-zinc-500">{roomName}</span>
                </p>
                <p className="bg-slate-100 rounded-lg p-4 mb-3">
                  Bed: <span className="text-zinc-500">{beds}</span>
                </p>
                <p className="bg-slate-100 rounded-lg p-4 mb-3">
                  Size: <span className="text-zinc-500">{roomSize} sq.ft.</span>
                </p>
                <p className="bg-slate-100 rounded-lg p-4 mb-3">
                  Price Per Night:{" "}
                  <span className="text-zinc-500">{pricePerNight}$</span>
                </p>
                <p className="bg-slate-100 rounded-lg p-4 mb-3">
                  Check In: <input type="date" name="checkIn" className="" />
                </p>
                <p className="bg-slate-100 rounded-lg p-4 mb-3">
                  Check Out: <input type="date" name="checkOut" className="" />
                </p>
              </div>
              <button
                className="btn bottom-0 text-blue-800 font-extrabold text-xl"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-2 my-10">
        <div className="card -96 bg-white shadow-xl px-5 py-5 relative">
          <h3 className="text-xl font-bold my-3">{roomName}</h3>
          <h3 className="text-xl font-bold my-3">Rating: {rating}/5</h3>
          <p>{description}</p>
        </div>
        <div>
          <div className="card -96 h-72 bg-white shadow-xl px-5 py-5 relative">
            <div className="">
              <h3 className="text-xl font-bold my-3">Amenities</h3>
              <p className="font-bold">{amenities[0]}</p>
              <p className="font-bold">{amenities[1]}</p>
              <p className="font-bold">{amenities[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
