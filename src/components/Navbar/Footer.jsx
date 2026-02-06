import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center md:items-baseline  shadow-2xl text-base-content p-10">
      <nav>
        <h6 className="footer-title fw-bold text-start font-bold bg-linear-to-r from-blue-400 to-blue-900 
          bg-clip-text text-transparent">Services</h6>
        <a className="link link-hover">Cleaning</a>
        <a className="link link-hover">Plumbing</a>
        <a className="link link-hover">Electrical</a>
        <a className="link link-hover">Painting</a>
      </nav>
      <nav>
        <h6 className="footer-title fw-bold text-start font-bold bg-linear-to-r from-blue-400 to-blue-900 
          bg-clip-text text-transparent">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title fw-bold text-start font-bold bg-linear-to-r from-blue-400 to-blue-900 
          bg-clip-text text-transparent">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to={'https://www.facebook.com/AmirDihan'}>
            <FaFacebook size={30} />
          </Link>
          <Link to={'https://github.com/AmirDihan'}>
            <FaGithub size={30} />
          </Link>
          <Link to={'https://x.com/Amir_Dihan'}>
            <FaSquareXTwitter size={33} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
