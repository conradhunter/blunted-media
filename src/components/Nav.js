import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/blunted-logo.png";

const Nav = ({ isAuth, logInButton, signOutButton, signUpButton, handleHomePageChange, handleLogInButtonClick }) => {

  useEffect(() => {
    setDisplayedNavButtons();
  });

  function setDisplayedNavButtons() {
    if (isAuth === true) { 
      logInButton.current.style.display = 'none';
      signOutButton.current.style.display = 'block';
      signUpButton.current.style.display = 'none';
    } else {
      logInButton.current.style.display = 'block';
      signOutButton.current.style.display = 'none';
      signUpButton.current.style.display = 'block';
    }
  }

  return (
    <nav className="bg-blue-200 h-16 flex justify-between items-center px-16 border-b-2 border-black">
      <div className="flex items-center">
        <figure className="leading-none mr-8 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="Blunted Logo" className="h-12" />
          </Link>
        </figure>
        <ul className="flex justify-center">
          <li className="mx-4 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 font-semibold">
            <Link to="/feed">Feed</Link>
          </li>
          <li className="mx-4 font-semibold">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="mx-4 font-semibold">
            <Link to="/events">Events</Link>
          </li>
          <li className="mx-4 font-semibold">
            <Link to="/store">Store</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-row">
        <button ref={logInButton} onClick={handleLogInButtonClick} className="bg-white px-2 py-1 rounded-3xl mr-2 border-black font-medium text-md">
          Log In
        </button>
        <button ref={signUpButton} onClick={handleHomePageChange} className="bg-blue-400 text-black px-2 py-1 mr-2 rounded-3xl border-black font-medium text-md">
          Sign Up
        </button>
        <button ref={signOutButton} className="bg-blue-400 text-black px-2 py-1 rounded-3xl border-black font-medium text-md">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
