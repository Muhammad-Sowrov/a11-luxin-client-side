/* eslint-disable react/prop-types */

const BookedRoom = ({ book }) => {
  const { beds, checkIn, checkOut, image, price, roomName } = book;
  return (
    <div>
      <div className="hero min-h-screen bg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl font-bold">{roomName}</h1>
            <p className="py-2">
             Beds: {beds}$
            </p>
            <p className="py-2">
             Price: {price}$
            </p>
            <p className="py-2">
             Check In: {checkIn}
            </p>
            <p className="py-2">
             Check Out: {checkOut}
            </p>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedRoom;
