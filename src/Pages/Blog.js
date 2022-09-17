// IMPORT ARRAY
import blogData from "../Data/blogData";

// IMPORT COMPONENTS
import ArticleTeaser from "../Components/ArticleTeaser";
import Nav from "../Components/Nav";

const Blog = () => {
  return (
    <div className="wrapper">
      <Nav />
      <div className="article-teaser-container">
        {blogData.map((blogData, index) => (
          <ArticleTeaser
            key={"Data" + index}
            title={blogData.title}
            img={blogData.img_url}
            id={blogData.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
