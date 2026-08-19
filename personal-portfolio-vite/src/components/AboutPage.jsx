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
                    <p>
                        I am a passionate software engineer with experience in building web applications and solving complex problems.
                    </p>
                </div>
            </div>
        </section>
    );
};