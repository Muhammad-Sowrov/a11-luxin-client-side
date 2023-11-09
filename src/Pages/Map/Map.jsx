
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const Map = () => {
  const position = [24.241493, 90.380046];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>A location you want to display!</Popup>
      </Marker>
    </MapContainer>
  );
};

const App = () => {
  const [showMap, setShowMap] = useState(false);

  const handleImageClick = () => {
    setShowMap(true);
  };

  return (
    <div className="container mx-auto mt-5">
        <h1 className='text-center text-3xl font-bold'>Hotel Location</h1>
      {showMap ? (
        <Map />
      ) : (
        <img
        className='items-center w-44 md:w-56 lg:w-64 mx-auto'
          src="https://i.ibb.co/wCKvCqF/pngwing-com.png" 
          alt="Click to show map"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
};

export default App;
