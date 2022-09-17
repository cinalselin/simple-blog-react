import { Link } from "react-router-dom";

// IMPORT CSS
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <h1>My Life</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
