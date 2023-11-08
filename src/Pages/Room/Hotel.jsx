/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Hotel = ({ hotel }) => {
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
  } = hotel;
  return (
    <div>
      <Link to={`/details/${_id}`}>
        <div className="card -96 bg-base-100 shadow-xl px-5 py-5 relative">
          <figure className="flex items-center justify-center">
            <img
              src={image}
              alt="room-photo"
              className="rounded-xl w-full h-full"
            />
          </figure>
          <p className="text-center top-8 left-8 font-bold absolute">
            {roomName}
          </p>
          <p className="text-center top-12 left-8 font-bold absolute">
            Rating: {rating}/5
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Hotel;
