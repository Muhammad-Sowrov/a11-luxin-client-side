
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { useState } from 'react';

// const Map = () => {
//   const position = [24.241493, 90.380046];

//   return (
//     <MapContainer
//       center={position}
//       zoom={13}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position}>
//         <Popup>A location you want to display!</Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// const App = () => {
//   const [showMap, setShowMap] = useState(false);

//   const handleImageClick = () => {
//     setShowMap(true);
//   };

//   return (
//     <div className="container mx-auto h-[30vh]">
//         <h1 className='text-center'>Map</h1>
//       {showMap ? (
//         <Map />
//       ) : (
//         <img
//         className='items-center mx-auto'
//           src="https://i.ibb.co/D7jLpS0/olay.png" 
//           alt="Click to show map"
//           onClick={handleImageClick}
//           style={{ cursor: 'pointer' }}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
