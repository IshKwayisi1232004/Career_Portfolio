import "./ExperiencePage.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import snhuLogo from "../assets/SNHU-logo.png";
import gatechLogo from "../assets/GaTech-logo.png";
import marketBasketLogo from "../assets/Market-Basket-Logo.png";
import jerseyMikesLogo from "../assets/JerseyMikes-logo.png";
import mvhsLogo from "../assets/MVHS.jpg";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Experience = () => {

    const [activeTab, setActiveTab] = useState("education");
    const timelineRef = useRef(null);

    const scrollTimeline = (direction) => {
        if (timelineRef.current) {
            timelineRef.current.scrollBy({
                left: direction * 460, // Adjust the scroll amount as needed
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="experience" id="experience">
            <div>

                <navbar />
                

                <h2>Experience</h2>

                <div className="experience-tabs">
                    <button
                        className={activeTab === "education" ? "active" : ""}
                        onClick={() => setActiveTab("education")}
                    >
                        Education
                    </button>
                    <button
                        className={activeTab === "work" ? "active" : ""}
                        onClick={() => setActiveTab("work")}
                    >
                        Work Experience
                    </button>
                </div>

                {activeTab === "education" && (
                    <div className="timeline-container">

                        <button
                            className="timeline-scroll-button left"
                            onClick={() => scrollTimeline(-1)}
                        >
                            ←
                        </button>

                        <div className="timeline" ref={timelineRef}>
                            <div className="timeline-item">
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <img src={mvhsLogo} alt="MVHS Logo" className="timeline-logo" />
                                        
                                        <div> 
                                            <h2>High School Diploma</h2>
                                            <h3>Manchester Valley High School</h3>
                                        </div>
                                    </div>

                                    <div className="timeline-details">
                                        <span>2019 - 2023</span>
                                        <span>Penacook, NH</span>
                                        <span>GPA: 4.19</span>
                                    </div> 
                                </div>
                                <div className="timeline-dot"></div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <img src={snhuLogo} alt="SNHU Logo" className="timeline-logo" />
                                        
                                        <div> 
                                            <h2>Bachelor of Science in Computer Science</h2>
                                            <h3>Southern New Hampshire University</h3>
                                        </div>
                                    </div>

                                    <div className="timeline-details">
                                        <span>2023 - 2026</span>
                                        <span>Manchester, NH</span>
                                        <span>GPA: 3.92</span>
                                    </div> 
                                </div>
                                <div className="timeline-dot"></div>
                            </div>

                            
                            <div className="timeline-item">
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <img src={gatechLogo} alt="GA Logo" className="timeline-logo" />
                                            
                                        <div> 
                                            <h2>Master of Science in Computer Science</h2>
                                            <h3>Georgia Institute of Technology</h3>
                                        </div>
                                    </div>

                                    <div className="timeline-details">
                                        <span>2026 - 2028</span>
                                        <span>Online</span>
                                        <span>GPA: N/A</span>
                                    </div>    
                                </div>
                                <div className="timeline-dot"></div>
                            </div>
                        </div>

                        <button
                            className="timeline-scroll-button right"
                            onClick={() => scrollTimeline(1)}
                        >
                            →
                        </button>
                    </div>
                )}

                {activeTab === "work" && (
                    <div className="timeline-container">
                
                        <button
                            className="timeline-scroll-button left"
                            onClick={() => scrollTimeline(-1)}
                        >
                            ←
                        </button>

                        <div className="timeline" ref={timelineRef}>
                            <div className="timeline-item">
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <img src={marketBasketLogo} alt="Market Basket Logo" className="timeline-logo" />
    
                                        <div> 
                                            <h2>Bagger</h2>
                                            <h3>Market Basket</h3>
                                        </div>
                                    </div>

                                    <div className="timeline-details">
                                        <span>June 2023 - October 2023</span>
                                        <span>Concord, NH</span>
                                    </div>    
                                </div>
                                <div className="timeline-dot"></div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <img src={jerseyMikesLogo} alt="Jersey Mike's Subs Logo" className="timeline-logo" />
                                            
                                        <div> 
                                            <h2>Crew Member</h2>
                                            <h3>Jersey Mike's Subs</h3>
                                        </div>
                                    </div>

                                    <div className="timeline-details">
                                        <span>October 2023 - Present</span>
                                        <span>Concord, NH</span>
                                    </div>
                                </div>

                                <div className="timeline-dot"></div>
                            </div>
                        </div>
                        <button
                                className="timeline-scroll-button right"
                                onClick={() => scrollTimeline(1)}
                            >
                                →
                        </button>
                        
                    </div>
                )}
            </div>
            <Footer />
        </section>
    );
};