import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paths/Home";
import Blog from "./paths/Blog";
import Footer from "./components/Footer";
import Feed from "./paths/Feed";
import Store from "./paths/Store";
import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const [isAuth, setIsAuth] = useState([]);
  const modalForm = useRef();

  // initial page load to set 'isAuth' to false
  useEffect(() => {
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }, []);

  const emailRef = useRef();
  const passwordRef = useRef();

  // Nav auth button functions
  const logInButton = useRef();
  const signOutButton = useRef();
  const signUpButton = useRef();

  async function handleSignUp() {
    await signUp(emailRef.current.value, passwordRef.current.value);
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn() {
    signInWithEmailAndPassword(auth, emailRef, passwordRef);
    setIsAuth(true);
  }

  function handleHomePageChange() {
    window.location = "/";
    // change to useNavigate later on
  }

  const blogUploadButton = useRef();
  const feedUploadButton = useRef();
  const feedUploadInput = useRef();

  function handleDisplayUserAuthFeatures() {
    if (isAuth == false) {
      blogUploadButton.current.style.display = "none";
      // feedUploadButton.current.style.display = "none";
      // feedUploadInput.current.style.display = "none";
    }
  }

  return (
    <div className="App">
      <Router>
        <Nav
          isAuth={isAuth}
          signUpButton={signUpButton}
          logInButton={logInButton}
          signOutButton={signOutButton}
          handleHomePageChange={handleHomePageChange}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                isAuth={isAuth}
                signIn={signIn}
                handleSignUp={handleSignUp}
                emailRef={emailRef}
                passwordRef={passwordRef}
                modalForm={modalForm}
              />
            }
          />
          <Route
            path="/feed"
            element={
              <Feed
                feedUploadButton={feedUploadButton}
                feedUploadInput={feedUploadInput}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <Blog
                isAuth={isAuth}
                blogUploadButton={blogUploadButton}
                handleDisplayUserAuthFeatures={handleDisplayUserAuthFeatures}
              />
            }
          />
          <Route path="/store" element={<Store />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
