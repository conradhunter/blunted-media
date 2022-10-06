import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/blunted-logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-200 flex flex-col items-center justify-evenly py-8">
      <ul className="flex">
        <li className="text-lg my-4 mx-6 font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          <Link to="/feed">Feed</Link>
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          <Link to="/events">Events</Link>
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          <Link to="/store">Store</Link>
        </li>
      </ul>
      <figure className="mb-4">
        <Link to="/">
          <img src={footerLogo} alt="Footer Logo" />
        </Link>
      </figure>
      <p className="font-semibold">Copyright &copy; Blunted 2022</p>
    </footer>
  );
};

export default Footer;
