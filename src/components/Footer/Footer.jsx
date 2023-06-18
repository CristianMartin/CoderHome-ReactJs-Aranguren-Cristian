import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center text-white mt-5">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-lg rounded-circle"
            href="https://www.facebook.com/"
            role="button"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className="btn btn-lg rounded-circle"
            href="https://www.twitter.com/"
            role="button"
            target="_blank"
          >
            <i className="bi bi-twitter"></i>
          </a>

          <a
            className="btn btn-lg rounded-circle"
            href="https://www.instagram.com/"
            role="button"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="btn btn-lg rounded-circle"
            href="https://www.linkedin.com/"
            role="button"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="btn btn-lg rounded-circle"
            href="https://www.google.com.ar/maps/place/Coderhouse/@-34.6016542,-58.3762835,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccaccf4a5be6f:0x97ebb6aac5198f6c!8m2!3d-34.6016542!4d-58.3740948!16s%2Fg%2F11d_yf7rhv"
            role="button"
            target="_blank"
          >
            <i className="bi bi-geo-alt-fill"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3 bg-black bg-gradient">
        © 2020 Copyright:
        <Link className="text-white" to="/">
          CoderHome.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
