import Map from "../../Pages/Map/Map";
import Featured from "../../Pages/Featured/Featured";
import Banner from "../Header/Banner/Banner";
import NewsLetter from "../../Pages/NewsLetter";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Map></Map>
            <Featured></Featured>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;