import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>COMPANY</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Why Choose Us</li>
                        <li>Team</li>
                        <li>Pricing & Plans</li>
                        <li>Contacts</li>
                        <li>Investors</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>SERVICES</h3>
                    <ul>
                        <li>Web Design & Development</li>
                        <li>Why Choose Us</li>
                        <li>Specialized SEO Services</li>
                        <li>Specialized Social Services</li>
                        <li>Specialized Graphics Services</li>
                        <li>Investors</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>RESOURCES</h3>
                    <ul>
                        <li>Portfolio</li>
                        <li>Terms of Services</li>
                        <li>Help & FAQ</li>
                        <li>Contact Us</li>
                        <li>Site Map</li>
                    </ul>

                    <div className="follow">
                        <button>Follow Us</button>
                        <div className="social-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-flags">
                <div className="flag-block">
                    <img src="/USA Flag.jpg" alt="USA" />
                    <h4>USA :</h4>
                    <p>1st Avenue, SW, Hickory, NC, USA</p>
                    <p>Email: info@thedigitalimpacts.com</p>
                </div>

                <div className="flag-block">
                    <img src="/UK Flag.jpg" alt="UK" />
                    <h4>UK :</h4>
                    <p>Oldham Greater Manchester, United Kingdom</p>
                    <p>Email: info@thedigitalimpacts.com</p>
                </div>

                <div className="flag-block">
                    <img src="/Canada Flag.jpg" alt="Canada" />
                    <h4>CANADA :</h4>
                    <p>92 Avenue, Surrey, BC, Canada</p>
                    <p>Email: info@thedigitalimpacts.com</p>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright © 2025 The Digital Impacts. All rights reserved</p>
            </div>
        </footer>
    );
}
