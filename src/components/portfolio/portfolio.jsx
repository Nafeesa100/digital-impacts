import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            industry: "Beauty & Salon",
            title: "REVIVE",
            subtitle: "Revive Beauty Salon & Institute",
            services: ["Web Development", "Quality Assurance"],
            tech: ["React", "AWS"],
            image: "Revive.jpg",
        },
        {
            id: 2,
            industry: "Natural Skin Care",
            title: "Voeux",
            subtitle: "Natural Skin Care",
            services: ["Web Development", "Quality Assurance"],
            tech: ["WordPress", "AWS"],
            image: "Voeux.jpg",
        },
        {
            id: 3,
            industry: "Ecommerce Website",
            title: "KINGZ",
            subtitle: "Ecommerce Website",
            services: ["Web Development", "Quality Assurance"],
            tech: ["WordPress", "AWS"],
            image: "The Kingz.jpg",
        },
        {
            id: 4,
            industry: "Fruit and Vegetable Retail Store",
            title: "Unifresh",
            subtitle: "Fruit and Vegetable Retail Store",
            services: ["Web Development", "Quality Assurance"],
            tech: ["React", "AWS"],
            image: "Unifresh.jpg",
        },
    ];

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-title">Projects We've Deliverd</h2>
                <p className="portfolio-text">
                    Over the past 10 years, we have designed and built a wide range of
                    high-quality products from scratch. Our team has finished various web
                    and mobile apps related to various spheres including e-learning,
                    healthcare, e-commerce, advertising, augmented reality, action sports,
                    finance and sharing economy.
                </p>
            </div>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <div
                        className={`project-item ${index % 2 === 0 ? "row-normal" : "row-reverse"
                            }`}
                        key={project.id}
                    >
                        <div className="project-info">
                            <h4 className="project-industry">INDUSTRY</h4>
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-subtitle">{project.subtitle}</p>

                            <div className="project-services">
                                {project.services.map((service, i) => (
                                    <p key={i} className="service-item">
                                        📘 {service}
                                    </p>
                                ))}
                            </div>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
