import { useLoaderData } from "react-router-dom";
import Hotel from "./Hotel";


const Room = () => {
    const hotels = useLoaderData();
    console.log(hotels);
    return (
        <div>
            <h4 className="text-center text-3xl">Available Rooms</h4>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    hotels.map(hotel => <Hotel key={hotel._id} hotel={hotel}></Hotel>)
                }
            </div>
        </div>
    );
};

export default Room;