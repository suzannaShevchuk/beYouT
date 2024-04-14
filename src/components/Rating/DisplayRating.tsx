import { FaStar, FaRegStar } from "react-icons/fa";
//, FaStarHalfAlt --add later for cleaner better web

//Display rating component displays the rating of the business using an array of 5 values, 1 = star, 0=empty

function DisplayRating(props: { props: number }) {
  const count = JSON.stringify(props);
  const ratingCount = JSON.parse(count);
  const rating = ratingCount.props;
  const starArr = [];

  for (let i = 1; i <= rating; i++) {
    starArr.push(1);
  }

  const emptyStars = 5 - rating;
  for (let i = 1; i <= emptyStars; i++) {
    starArr.push(0);
  }
  const stars = starArr.map((val, i) => {
    if (val == 1) {
      return (
        <div style={{ display: "table-cell", color: "yellow" }} key={i}>
          <FaStar />
        </div>
      );
    } else {
      return (
        <div style={{ display: "table-cell", color: "yellow" }} key={i}>
          <FaRegStar />
        </div>
      );
    }
  });

  return (
    <span>
      {stars} <span> {rating}</span>
    </span>
  );
}

export default DisplayRating;
