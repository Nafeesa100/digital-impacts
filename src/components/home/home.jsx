import React from "react";
import "./home.css";
import AboutUs from "../about/about";
import Services from "../services/services";
import Portfolio from "../portfolio/portfolio";

export default function Home() {
    return (
        <section className="home-hero">
            <div className="hero-inner">

                <div className="hero-image">

                    <img src="/Home-Image.jpg" alt="Team illustration" />
                </div>

                <div className="hero-content">
                    <h3 className="kicker">We are full Services</h3>

                    <h1 className="hero-title">
                        <span className="accent">Digital Marketing Agency</span>
                    </h1>

                    <h2 className="welcome">Welcome to the Digital Impacts</h2>

                    <div className="divider" />

                    <p className="hero-paragraph">
                        We partner with our clients with a team of professionals, we are able to provide
                        the best on our side. We strive to be leaders in digital marketing services
                        worldwide by revolutionizing the industry and setting new standards of
                        professionalism and success.
                    </p>

                    <a className="message-btn" href="/contact">
                        Message Us Now
                    </a>
                </div>
            </div>
            <Services />

            <AboutUs />
            <Portfolio />

        </section>



    );
}
