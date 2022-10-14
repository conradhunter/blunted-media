import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./paths/Home";
import Blog from "./paths/Blog";
import Footer from "./components/Footer";
import Feed from "./paths/Feed";
import Store from "./paths/Store";
import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Events from "./paths/Events";
import Post from "./components/Post";
import UploadBlog from "./paths/UploadBlog";

function App() {
  const [isAuth, setIsAuth] = useState(null);

  // initial page load to set 'isAuth' to false
  useEffect(() => {
    setIsAuth(false);
  }, []);

  const emailRef = useRef();
  const passwordRef = useRef();

  // Authentication logic
  const logInButton = useRef();
  const signOutButton = useRef();
  const signUpButton = useRef();

  function handleSignUp() {
    signUp(auth, emailRef.current.value, passwordRef.current.value);
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  }

  function signUp() {
    return createUserWithEmailAndPassword(auth, emailRef, passwordRef);
  }

  async function handleSignIn() {
    signIn(emailRef.current.value, passwordRef.current.value);
    setIsAuth(true);
    homeContent.current.style.filter = "blur(0px)";
    localStorage.setItem("isAuth", true);
  }

  function signIn() {
    return signInWithEmailAndPassword(auth, emailRef, passwordRef);
  }

  async function handleSignOut() {
    await signUserOut(auth);
    setIsAuth(false);
    navigate("/");
    localStorage.setItem("isAuth", false);
  }

  function signUserOut() {
    return signOut(auth);
  }

  const handleHomePageChange = () => {
    navigate("/");
  };

  const blogUploadButton = useRef();
  const feedUploadButton = useRef();
  const feedUploadInput = useRef();

  function handleDisplayUserAuthFeatures() {
    if (isAuth === false) {
      blogUploadButton.current.style.display = "none";
      // feedUploadButton.current.style.display = "none";
      // feedUploadInput.current.style.display = "none";
    }
  }

  // Display Log-In modal if user clicks Log-In button in Navigation Bar
  const modalForm = useRef();
  let navigate = useNavigate();

  const handleLogInButtonClick = () => {
    navigate("/");
    setTimeout(() => {
      modalForm.current.style.display = "block";
      isModalOpen();
    }, 300);
  };

  const homeContent = useRef();

  function isModalOpen() {
    if (modalForm.current.style.display === "block") {
      homeContent.current.style.filter = "blur(5px)";
    }
  }

  const [postLists, setPostList] = useState([]);

  return (
    <div className="App">
      <Nav
        isAuth={isAuth}
        signUpButton={signUpButton}
        logInButton={logInButton}
        signOutButton={signOutButton}
        handleHomePageChange={handleHomePageChange}
        handleLogInButtonClick={handleLogInButtonClick}
        handleSignOut={handleSignOut}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              handleSignIn={handleSignIn}
              handleSignUp={handleSignUp}
              emailRef={emailRef}
              passwordRef={passwordRef}
              modalForm={modalForm}
              homeContent={homeContent}
              isAuth={isAuth}
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
              postLists={postLists}
              setPostList={setPostList}
            />
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/store" element={<Store />} />

        <Route exact path="/post/:id" element={<Post postLists={postLists} />} />

        <Route path='/upload-blog-post' element={<UploadBlog />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
