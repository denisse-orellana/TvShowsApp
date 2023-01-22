import { StarFill, StarHalf, Star as StarEmpty } from 'react-bootstrap-icons';

const FiveStarRating = ({ rating }) => {

  // Declare star icon array
  const starList = [];

  // Store number of filled stars
  const starFillCount = Math.floor(rating);

  // Store if yes or no is a half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  // ej: 4.35 - 4  

  // Store number of emty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  // Push the filled stars icons
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + 1} />);
  }

  return <div>{starList}</div>
}

export default FiveStarRating;