import React, { useState } from "react";
import "./Footer.css";
import flag from "../../assets/images/icons/16.png";

export default function Footer() {
  // Mobile collapsible states
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <footer className="apple-footer">
      <div className="footer-inner">

        {/* TOP DISCLAIMER TEXT */}
        <div className="footer-top-text">
          <p>
            1. Trade-in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade-in of iPhone 8 Plus and iPhone X in good condition...
          </p>
          <p>
            2. Subscription required. Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group...
          </p>
        </div>

        {/* ============================
             FOOTER COLUMNS (DESKTOP)
           ============================ */}
        <div className="footer-columns">

          {/* COLUMN 1 */}
          <div className="footer-col">
            <h3 onClick={() => toggle(1)}>Shop and Learn</h3>
            <ul className={open === 1 ? "open" : ""}>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">AirPods</a></li>
              <li><a href="#">HomePod</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className="footer-col">
            <h3 onClick={() => toggle(2)}>Services</h3>
            <ul className={open === 2 ? "open" : ""}>
              <li><a href="#">Apple Music</a></li>
              <li><a href="#">Apple TV+</a></li>
              <li><a href="#">Apple Arcade</a></li>
              <li><a href="#">iCloud</a></li>
            </ul>

            <h3 onClick={() => toggle(22)}>Account</h3>
            <ul className={open === 22 ? "open" : ""}>
              <li><a href="#">Manage Your Apple ID</a></li>
              <li><a href="#">iCloud.com</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="footer-col">
            <h3 onClick={() => toggle(3)}>Apple Store</h3>
            <ul className={open === 3 ? "open" : ""}>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Today at Apple</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Order Status</a></li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="footer-col">
            <h3 onClick={() => toggle(4)}>For Business</h3>
            <ul className={open === 4 ? "open" : ""}>
              <li><a href="#">Apple and Business</a></li>
            </ul>

            <h3 onClick={() => toggle(44)}>For Education</h3>
            <ul className={open === 44 ? "open" : ""}>
              <li><a href="#">Apple and Education</a></li>
            </ul>

            <h3 onClick={() => toggle(444)}>For Government</h3>
            <ul className={open === 444 ? "open" : ""}>
              <li><a href="#">Government Resources</a></li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div className="footer-col">
            <h3 onClick={() => toggle(5)}>About Apple</h3>
            <ul className={open === 5 ? "open" : ""}>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Job Opportunities</a></li>
            </ul>
          </div>

        </div>

        {/* "More ways to shop" */}
        <div className="footer-shop-more">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        {/* BOTTOM ROW */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            © 2025 Apple Inc. All rights reserved.
          </div>

          <div className="footer-links">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sales and Refunds</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>

          <div className="footer-country">
            <img src={flag} alt="Flag" />
            <span>United States</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
