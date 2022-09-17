import { Link } from "react-router-dom";

const ReadMoreButton = (props) => {
  return (
    <button className="read-more-button">
      <Link to={`/${props.id}`}>Read More</Link>
    </button>
  );
};

export default ReadMoreButton;
