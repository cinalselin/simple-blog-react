import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "../Components/Nav";

const Home = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <section className="header-section">
        <h2>Welcome to my simple Blog</h2>
        <button>
          <Link to="/blog">Go to articles</Link>
        </button>
      </section>
    </main>
  );
};

export default Home;
