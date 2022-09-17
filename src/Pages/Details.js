import blogData from "../Data/blogData";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import "./Detail.css";

const Details = () => {
  let params = useParams();
  let posting = blogData[params.id];
  console.log(params);

  return (
    <div>
      <Nav />
      <main>
        <section className="detail-wrapper">
          <div className="image-container">
            <img className="detailImage" src={posting.img_url} />
          </div>
          <div className="description-wrapper">
            <div className="title-container">
              <p>{posting.title}</p>
              <p>{posting.published_date}</p>
            </div>
            <div className="author-description">
              <p>{posting.description}</p>
              <p>{posting.author}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Details;
