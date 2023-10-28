import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const rating = (ratingVal) => {
  var stars = [];

  for (var i = 0; i < 5; i++) {
    if (ratingVal >= 1)
      stars.push(
        <BsStarFill
          className="full-star"
          style={{ color: "#ffc700" }}
          key={i}
        />
      );
    else if (ratingVal > 0 && ratingVal < 1)
      stars.push(
        <BsStarHalf
          className="half-star"
          style={{ color: "#ffc700" }}
          key={i}
        />
      );
    else
      stars.push(
        <BsStarFill
          className="empty-star"
          style={{ color: "#dfdfdf" }}
          key={i}
        />
      );

    ratingVal = ratingVal - 1;
  }

  return stars;
};
