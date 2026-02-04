import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal shadow-2xl text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
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
