import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Sviatoslav Zakharuk©</h2>
      <div className="footer-lines">
        <div className="footer-line"></div>
        <div className="footer-line footer-line--2"></div>
      </div>
      <p>
        <ul>
          <a href="https://github.com/Bunix25">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
