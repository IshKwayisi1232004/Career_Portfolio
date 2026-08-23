import "./ProjectDetails.css";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export const ProjectDetails = () => {
    const { projectId } = useParams();

    const project = projects.find(
        (project) => project.id === projectId
    );

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

            {/* Hero / Main Media */}
            <section className="project-hero">
                {project.image ? (
                    <img 
                        src={project.image}
                        alt={project.title}
                    />
                ) : (
                    <div className="project-hero-placeholder">
                        {project.title}
                    </div>
                )}

            </section>

            {/* Project Information */}
            <section className="project-info">
                
                <div className="project-main-content">

                    <ProjectSection 
                        title="The Project"
                        content={project.sections.project}
                    />

                    <ProjectSection
                        title="The Problem"
                        content={project.sections.problem}
                    />

                    <ProjectSection 
                        title="Technical Implementation"
                        content={project.sections.implementation}
                    />

                    <ProjectSection
                        title="Challenges & Solutions"
                        content={project.sections.challenges}
                    />

                    <ProjectSection
                        title="Lessons Learned"
                        content={project.sections.learned}
                    />

                </div>

                {/* Project Sidebar */}
                <aside className="project-sidebar">

                    <div>
                        <h3>Project Type</h3>
                        <p>{project.type}</p>
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

        </main>
    );
};

const ProjectSection = ({title, content }) => {
    return (
        <section className="project-section">

            <h2>{title}</h2>

            <div className="project-section-content">
                {content}
            </div>

        </section>    
    );
};