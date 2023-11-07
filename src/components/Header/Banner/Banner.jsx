import vid from "../../../assets/parallax.mp4";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-emerald-50 font-bold">Welcome to Lux<span className="text-purple-800">Inn</span></h1>
            <h1 className="mb-5 text-xl text-emerald-50 font-bold">-Your Home Away From Home</h1>
            <p className="mb-5 text-emerald-50 ">
            Book your stay today and experience the epitome of comfort and elegance. Your journey to relaxation begins at LuxInn.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
