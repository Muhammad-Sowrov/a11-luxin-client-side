import { useLoaderData } from "react-router-dom";

const Details = () => {
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

  return (
    <div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <div>
        <div className="card -96 bg-base-100 shadow-xl px-5 py-5 relative">
            
          </div>
        </div>
        <div>
          <div className="card -96 bg-base-100 shadow-xl px-5 py-5 relative">
            <figure className="flex items-center justify-center">
              <img
                src={image}
                alt="room-photo"
                className="rounded-xl w-full h-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
