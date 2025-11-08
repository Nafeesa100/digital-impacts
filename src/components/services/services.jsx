import React from "react";
import "./Services.css";

export default function Services() {
    const cards = [
        {
            title: "Digital Marketing",
            desc:
                "The Digital Impacts have compiled a list of the best digital marketing companies in the world.",
            icon: (

                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2l1.9 4.1L18 8l-4.1 1.9L12 14l-1.9-4.1L6 8l4.1-1.9L12 2z" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Web Development",
            desc:
                "Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution.",
            icon: (

                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M2 22s4-1 6-3 3-4 3-4 1.5-1.5 4-3 3-1 3-1 0 2-1 3-1 1.5-3 4-3 4-3 4-2 0-6-2z" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 6c2 2 4 3 6 3" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Graphic Designing",
            desc:
                "Create visual concepts to communicate ideas that inspire and captivate consumers — creative thinking, art and design.",
            icon: (

                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="#1296d6" strokeWidth="1.2" />
                    <path d="M7 10h10" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            title: "Content writer",
            desc:
                "That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media",
            icon: (

                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2l1.9 4.1L18 8l-4.1 1.9L12 14l-1.9-4.1L6 8l4.1-1.9L12 2z" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "SEO",
            desc:
                "Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search queries.",
            icon: (

                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2l1.9 4.1L18 8l-4.1 1.9L12 14l-1.9-4.1L6 8l4.1-1.9L12 2z" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="#1296d6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        }
    ];

    return (
        <section className="services-section">
            <div className="services-inner">
                <header className="services-header">
                    <h2>
                        We Provide The Best<br />
                        Services With Our<br />
                        Developers
                    </h2>
                </header>

                <div className="cards">
                    {cards.map((c, i) => (
                        <article key={i} className="service-card">
                            <div className="card-top" />
                            <div className="card-body">
                                <h3>{c.title}</h3>
                                <div className="card-icon">{c.icon}</div>
                                <p>{c.desc}</p>
                            </div>
                            <div className="card-bottom" />
                        </article>
                    ))}
                </div>
            </div>
            <div className="industries-section">
                <h2>Industries We<br />Work With</h2>
                <p>
                    We work as a technology partner for various industries.<br />
                    Our expertise can be applied to the specific demands<br />
                    and nuances in your industry.
                </p>
            </div>

            <div className="industries-icons">
                <div className="industry-card">
                    <img src="/Estate.jpg" alt="Real Estate" />
                    <h4>REAL ESTATE</h4>
                </div>

                <div className="industry-card">
                    <img src="/Education.jpg" alt="Education" />
                    <h4>EDUCATION</h4>
                </div>

                <div className="industry-card">
                    <img src="Commerce.jpg" alt="Commerce" />
                    <h4>COMMERCE</h4>
                </div>

                <div className="industry-card">
                    <img src="Hospitality.jpg" alt="Hospitality" />
                    <h4>HOSPITALITY</h4>
                </div>

                <div className="industry-card">
                    <img src="Health-Care.jpg" alt="Healthcare" />
                    <h4>HEALTHCARE</h4>
                </div>

                <div className="industry-card">
                    <img src="Fintech.jpg" alt="Fintech" />
                    <h4>FINTECH</h4>
                </div>
            </div>

        </section>
    );
}
