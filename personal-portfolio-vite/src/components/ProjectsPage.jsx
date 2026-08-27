import {useState} from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";
import { projects } from "../data/projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All", 
        "Web Development", 
        "Game Development",
        "AI/ML",
        "Embedded Systems",
        "Mobile Development",
        "Computer Graphics"
    ];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(
            (project) => 
                project.category === activeCategory
    );

    return (
        <div className="projects-page">
            <Navbar />
            
            <main className="projects">
                <section className="projects-header">

                    <h1>
                        Presenting to you, my
                        <br />
                        <span><b>Projects</b></span>
                    </h1>
                </section>
                <section className="project-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={
                                activeCategory === category
                                ? "filter-button active"
                                : "filter-button"
                            }
                            onClick={() => 
                                setActiveCategory(category)
                            }
                        >
                            {category}
                        </button>
                    ))}
                </section>

                <section className="project-grid">
                    {filteredProjects.map((project) => (
                        <article
                            className="project-card"
                            key={project.id}
                        >
                            <div className="project-image">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                ) : (
                                    <div className="project-image-placeholder">
                                        {project.title}
                                    </div>
                                )}
                            </div>

                            <div className="project-card-content">
                                <h2>{project.title}</h2>

                                <p>
                                    {project.description}
                                </p>

                                <div className="project-technologies">
                                    {project.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>

                                <div className="project-buttons">
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="project-button primary"
                                    >
                                        Project Details
                                    </Link>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-button"
                                        >
                                            Live Demo
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-button"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </main>    

            <Footer />

        </div>

    );
};