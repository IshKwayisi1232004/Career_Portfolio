import "./ProjectDetails.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ProjectDetails = () => {
    const { projectId } = useParams();

    const project = projects.find(
        (project) => project.id === projectId
    );

    const [selectedMedia, setSelectedMedia] = useState(0);

    if(!project){
        return (
            <main className="project-details">
                <h1>Project Not Found</h1>

                <Link to="/projects">
                    ← Back to Projects
                </Link>
            </main>
        )
    }

    return (
        <div className="project-details-page">
            <Navbar />
            
            <main className="project-details">

                {/* Back to Projects */}
                <Link 
                    to="/projects"
                    className="back-to-projects"
                >
                    ← Back to Projects
                </Link>

                {/* Project Header */}
                <section className="project-details-header">

                    <p className="project-category">
                        {project.category}
                    </p>

                    <h1>{project.title}</h1>

                    <p className="project-subtitle">
                        {project.subtitle}
                    </p>
                    
                    {/* Technologies */}
                    <div className="project-detail-technologies">
                        {project.technologies.map(
                            (technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            )
                        )}
                    </div>

                    {/* Links */}
                    <div className="project-detail-buttons">
                        
                        {project.demo && (
                            <a 
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="detail-button primary"
                            >
                                Live Demo
                            </a>
                        )}

                        {project.github && (
                            <a 
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="detail-button primary"
                            >
                                GitHub
                            </a>
                        )}

                    </div>

                </section>

                {/* Project Showcase */}
                <section className="project-showcase">

                    {/* Project Media */}
                    <div className="project-media">

                        {/* Featured Media */}
                        <div className="project-featured-media">

                            {project.media[selectedMedia].type === "image" ? (
                                <img
                                    src={project.media[selectedMedia].src}
                                    alt={project.media[selectedMedia].alt}
                                />
                            ) : (
                                <video
                                    controls
                                    src={project.media[selectedMedia].src}
                                />
                            )}

                        </div>

                        {/* Thumbnails */}
                        <div className="project-media-thumbnails">

                            {project.media.map((media, index) => (
                                <button
                                    key={index}
                                    className={
                                        selectedMedia === index
                                            ? "media-thumbnail active"
                                            : "media-thumbnail"
                                    }
                                    onClick={() => setSelectedMedia(index)}
                                >
                                    {media.type === "image" ? (
                                        <img
                                            src={media.src}
                                            alt={media.alt}
                                        />
                                    ) : (
                                        <video
                                            src={media.src}
                                            muted
                                        />
                                    )}
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* Sidebar */}
                    <aside className="project-sidebar">

                        <div>
                            <h3>Project Type</h3>
                            <p>{project.type}</p>
                        </div>

                        <div>
                            <h3>Role</h3>
                            <p>{project.role}</p>
                        </div>

                        <div>
                            <h3>Time Frame</h3>
                            <p>{project.timeframe}</p>
                        </div>

                        <div>
                            <h3>Development</h3>
                            <p>{project.development}</p>
                        </div>

                        <div>
                            <h3>Status</h3>
                            <p>{project.status}</p>
                        </div>

                    </aside>

                </section>


                <section className="project-info">

                    <div className="project-main-content">

                        <ProjectSection
                            title="The Project"
                            content={project.sections.project}
                        />

                        <ProjectDesignSection
                            title="Design and Development"
                            content={project.sections.designAndDevelopment}
                        />

                        <ProjectSection
                            title="Technical Implementation"
                            content={project.sections.implementation}
                        />

                        <ProjectSection
                            title="Challenges, Solutions, & Lessons Learned"
                            content={project.sections.challenges}
                        />

                        <ProjectSection
                            title="Future Project Plans"
                            content={project.sections.future}
                        />

                    </div>

                </section>

            </main>
            <Footer />
        </div>
    );
};

const ProjectSection = ({ title, content }) => {
    const paragraphs = Array.isArray(content)
        ? content
        : [content];

    return (
        <section className="project-section">

            <h2>{title}</h2>

            <div className="project-section-content">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>

        </section>
    );
};

const ProjectDesignSection = ({ title, content }) => {
    return (
        <section className="project-section">

            <h2>{title}</h2>

            {/* Introduction */}
            {content.introduction.map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))}

            {/* Gameplay Systems */}
            {content.gameplaySystems && (
                <>
                    <h3>Gameplay Systems</h3>

                    <ul>
                        {content.gameplaySystems.map((system, index) => (
                            <li key={index}>
                                <strong>{system.name}</strong> —{" "}
                                {system.description}
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {/* Level Design */}
            {content.levelDesign && (
                <>
                    <h3>Level Design</h3>

                    {content.levelDesign.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </>
            )}

            {/* Scrum Master */}
            {content.scrumMaster && (
                <>
                    <h3>Scrum Master</h3>

                    {content.scrumMaster.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </>
            )}

        </section>
    );
};