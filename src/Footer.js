import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <h3>Get to know us</h3>
          <p className="footer__p">Abou us</p>
          <p className="footer__p">Careers</p>
          <p className="footer__p">Press Releases</p>
        </div>
        <div className="footer__center">
          <h3>Connect with us</h3>
          <p className="footer__p">Facebook</p>
          <p className="footer__p">Twitter</p>
          <p className="footer__p">Instagram</p>
        </div>
        <div className="footer__right">
          <h3>Make money with us</h3>
          <p className="footer__p">Protect and Build your brand</p>
          <p className="footer__p">Become an Affilate</p>
          <p className="footer__p">Advertise your Products</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="bottom__top">
          <p>Conditions of use and sale</p>
          <p>Priavcy notice</p>
          <p>Interest Based ads</p>
        </div>
        <div className="bottom__down">
          <p>© 2020-2023,Shopper'sCart.com,Inc. or its affiliates </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
