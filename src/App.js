import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paths/Home";
import Blog from "./paths/Blog";
import Footer from "./components/Footer";
import Feed from "./paths/Feed";
import Stats from "./paths/Stats";
import Store from "./paths/Store";
import { useEffect, useState } from "react";

function App() {

  const [isAuth, setIsAuth] = useState([]);

  useEffect(() => {
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  })

  return (
    <div className="App">
      <Nav />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/stats" element={<Stats />} />
          <Route exact path="/store" element={<Store />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
