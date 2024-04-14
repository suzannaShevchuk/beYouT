import Navbarr from "../Navbar/Navbar";
import "./Browse.css";
import BrowseHomeCard from "./BrowseComponents/BrowseHomeCard";
import LocationCard from "./BrowseComponents/LocationCard";
import RecommendCarousel from "./BrowseComponents/RecommendCarousel";

function BrowseHome() {
  return (
    <div>
      <Navbarr />

      <BrowseHomeCard />
      <RecommendCarousel />
      <LocationCard />
    </div>
  );
}

export default BrowseHome;
