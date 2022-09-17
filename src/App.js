import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

// import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Details from "./Pages/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
