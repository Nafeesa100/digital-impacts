import React from "react";
import "./about.css";

export default function AboutUs() {
    return (
        <section className="about-section">

            <h1 className="main-title">EVERYTHING YOU NEED TO KNOW ABOUT</h1>

            <div className="about-block">
                <h2>THE DIGITAL IMPACTS</h2>
                <p>
                    The <strong>Digital Impacts</strong> create a perfect company for its customers.
                    <strong> Digital Impacts</strong> offers the best services to ensure your business thrives online.
                    Because we partner with our clients with a team of professionals, we can provide the best on our side.
                    We strive to be leaders in digital marketing services worldwide by revolutionizing the industry and
                    setting new standards of professionalism and success.
                </p>
            </div>

            <div className="about-block">
                <h2>OUR VISION</h2>
                <p>
                    We strive to be leaders in digital marketing services across the world by revolutionizing the industry
                    and setting new standards of professionalism and success. Our vision is to become a top agency offering
                    online marketing strategies, digital sales solutions, and internet brand management in the
                    international business sphere.
                </p>
            </div>

            <div className="about-block">
                <h2>OUR MISSION</h2>
                <p>
                    Our mission is to partner with customers for their success as we create diverse client base including
                    companies and individuals functioning in many different fields and economies. We will be best in
                    providing consistently successful, unique, and forward-thinking digital marketing solutions that take
                    into account the individual requirements and unique demands of each client.
                </p>
            </div>

            <div className="stats-container">
                <div className="stat dark">
                    <h2>10000+</h2>
                    <p>Domain Names Registered</p>
                </div>
                <div className="stat blue">
                    <h2>90000+</h2>
                    <p>Websites Hosted</p>
                </div>
                <div className="stat light">
                    <h2>45000+</h2>
                    <p>Customers</p>
                </div>
            </div>

        </section>
    );
}
