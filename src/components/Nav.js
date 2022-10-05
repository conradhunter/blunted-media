import React from "react";
import logo from "../assets/blunted-logo.png";

const Nav = () => {
  return (
    <nav className="bg-blue-200 h-16 flex justify-between items-center px-16 border-b-2 border-black">
      <div className="flex items-center">
        <figure className="leading-none mr-8 cursor-pointer">
          <a href="/">
            <img src={logo} alt="Blunted Logo" className="h-12" />
          </a>
        </figure>
        <ul className="flex justify-center">
          <li className="mx-4 font-semibold">
            <a href="/">Home</a>
          </li>
          <li className="mx-4 font-semibold">
            <a href="/feed">Feed</a>
          </li>
          <li className="mx-4 font-semibold">
            <a href="/blog">Blog</a>
          </li>
          <li className="mx-4 font-semibold">
            <a href="/stats">Stats</a>
          </li>
          <li className="mx-4 font-semibold">
            <a href="/store">Events</a>
          </li>
          <li className="mx-4 font-semibold">
            <a href="/store">Store</a>
          </li>
        </ul>
      </div>

      <div>
        <button className="bg-white px-2 py-1 rounded-3xl mr-2 border-black font-medium text-md">
          Log In
        </button>
        <button className="bg-blue-400 text-black px-2 py-1 mr-2 rounded-3xl border-black font-medium text-md">
          Sign Up
        </button>
        <button className="bg-blue-400 text-black px-2 py-1 rounded-3xl border-black font-medium text-md">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
