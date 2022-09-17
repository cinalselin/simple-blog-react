// IMPORT COMPONENTS
import ReadMoreButton from "./ReadMoreButton";

// IMPORT CSS
import "./ArticleTeaser.css";

const ArticleTeaser = (props) => {
  return (
    <div className="article-teaser">
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <ReadMoreButton id={props.id} />
    </div>
  );
};

export default ArticleTeaser;
