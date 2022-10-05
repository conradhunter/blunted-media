import React from 'react';
import footerLogo from '../assets/blunted-logo.png';

const Footer = () => {
    return (
        <footer className="bg-blue-200 flex flex-col items-center justify-evenly py-8">
      <ul className="flex">
        <li className="text-lg my-4 mx-6 font-semibold">
          Home
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          Feed
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          Blog
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          Stats
        </li>
        <li className="text-lg my-4 mx-6 font-semibold">
          Store
        </li>
      </ul>
      <figure className="mb-4">
        <a href="/">
          <img src={footerLogo} alt='Footer Logo'/>
        </a>
      </figure>
      <p className="font-semibold">Copyright &copy; Blunted 2022</p>
    </footer>
    );
}

export default Footer;
