import "./AboutPage.css";
import profile from "../assets/AboutMe.jpeg";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <section className="about" id="about">
             <div>
                <Link to="/" className="home-link">
                    Ishmael Kwayisi
                </Link>
            </div>
            <div className="about-content">
                    <img 
                        src={profile} 
                        alt="Profile" 
                        className="profile-image" 
                    />
                <div className="about-text">
                    <h3>I don't create software for money, I create software to share richly interactive experiences.</h3>
                    <p>
                        I'm Ishmael Kwayisi, a first generation African-American graduate student majoring in Computer Science 
                        through Georgia Tech's online master's program. My journey into the world of technology began with a 
                        fascination for video games, which sparked my curiosity about how they were created. This curiosity led me to explore programming and software development, where I discovered my passion for building interactive systems and solving complex problems. 
                    </p>

                     <p>
                        I believe that undrstanding and applications of computer science, technologists have the power to not only
                        solve problems, but to create interactive experiences that can inspire and engage people. 
                        My goal is to leverage my skills and knowledge to contribute to the development of innovative software 
                        solutions that make a positive impact on society.
                    </p>

                    <p>
                        Outside of my academic endeavors, I enjoy playing video games. Playing video games is one of my favorites ways 
                        to relax and speak to my inner child. Besides this, I'm always challenging myself to 
                        physical activities and exploring new avenues for personal growth.
                    </p>
                </div>
            </div>
        </section>
    );
};