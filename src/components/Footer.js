import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
import { BsFire } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4 " style={{ background: "#fff" }}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h4 className="text-black mb-4">Contact Us</h4>
              <div>
                <address className="text-black fs-6">
                  Hno : Hoa Lac, <br /> Ha Noi <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+84 978522556"
                  className="mt-3 d-block mb-1 text-black"
                >
                  091266771508
                </a>
                <a
                  href="mailto:vanhleg2301@gmail.com"
                  className="mt-2 d-block mb-0 text-black"
                >
                  vanhleg2301@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-black" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-black" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-black" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-black" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <h4 className="text-black mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-black py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-black py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-black py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-black py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-black py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <h4 className="text-black mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-black py-2 mb-1">About Us</Link>
                <Link className="text-black py-2 mb-1">Faq</Link>
                <Link className="text-black py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-12 col-lg-2">
              <h4 className="text-black mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-black py-2 mb-1">Laptops</Link>
                <Link className="text-black py-2 mb-1">Headphones</Link>
                <Link className="text-black py-2 mb-1">Tablets</Link>
                <Link className="text-black py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4" style={{ background: "#f8f8f8" }}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-black">
                &copy; {new Date().getFullYear()} Copyright: Made with{" "}
                <BsFire style={{ marginBottom: 0 }} size="20px" /> SDN301m
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
