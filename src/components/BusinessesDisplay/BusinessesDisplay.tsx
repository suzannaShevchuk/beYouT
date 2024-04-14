import { Button } from "react-bootstrap";
import { IoFilterCircleOutline, IoArrowDown } from "react-icons/io5";
import Navbarr from "../Navbar/Navbar";
import "./BusinessesDisplay.css";
import Navbar2 from "./Navbar2";
import BusinessCard from "./BusinessCard";
import Data from "../../data/db.json";

function BusinessesDisplay() {
  return (
    <div>
      <Navbarr />
      <Navbar2 />

      <h2 className="browseHeading">
        Nail Salon {} near me in Everett, Wa {}
      </h2>

      <Button className="buttons2" href="">
        <IoFilterCircleOutline />
        Filters
      </Button>

      <Button className="buttons2">
        Sort by: <IoArrowDown />
      </Button>
      {Data.businesses.map((business) => {
        return <BusinessCard props={business} />;
      })}
    </div>
  );
}

export default BusinessesDisplay;
