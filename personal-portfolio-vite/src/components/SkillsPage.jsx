import "./SkillsPage.css";
import {SiHtml5 , SiCss, SiJavascript, SiTypescript, SiCplusplus,
    SiC, SiReact, SiExpress, SiPython, SiAngular, SiNodedotjs, SiIonic, SiBootstrap, SiTailwindcss, 
    SiUnrealengine, SiUnity, SiMongodb, SiMysql, SiPostgresql, SiGit, SiGitlab, SiCapacitor, SiFirebase, 
    SiDocker, SiVite
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { Link } from "react-router-dom";

const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> }, 
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C#", icon: <PiFileCSharp /> },
    { name: "C", icon: <SiC /> },
    { name: "React", icon: <SiReact /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Ionic", icon: <SiIonic /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Unreal Engine", icon: <SiUnrealengine /> },
    { name: "Unity", icon: <SiUnity /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitLab", icon: <SiGitlab /> },
    { name: "Capacitor", icon: <SiCapacitor /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Vite", icon: <SiVite /> },
];

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-name">
                <Link to="/" className="home-link">
                    Ishmael Kwayisi
                </Link>
            </div>
            <div className="skills-container">
                <div className="skills-header">
                    <h2>Ladies and gentlemen, I present to you my </h2>
                    <h1>Skills</h1>

                    <p>Uncover the programming languages and frameworks I've worked to not only master, but
                        also to leverage in crafting innovative solutions. Each skill is just as integral as the 
                        last to powering my projects!
                    </p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};