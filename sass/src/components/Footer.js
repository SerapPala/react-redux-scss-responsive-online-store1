import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className='container'>
      <div className="footer__page-break" />
      <div className="footer__top">
        <Link className="footer__top--link" to="/About">
          Hakkımızda
        </Link>
        <Link className="footer__top--link" to="/Contact">
          İletişim
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Footer;