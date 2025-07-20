// client/src/components/Projects.jsx
import React from 'react';
import { projects } from '../data';

// 1. Define the GitHub Icon component
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const ProjectCard = ({ project }) => (
    <div className="card-bg group">
        <div className="project-card-initial-content">
            <div className="flex justify-between items-center">
                <div className="folder-icon"><i className="fas fa-folder"></i></div>
            </div>
            {/* 2. Icon removed from the title */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc text-sm">{project.desc}</p>
            <div className="project-tech-list">
                {project.tech.map(t => <span key={t}>{t}</span>)}
            </div>
        </div>
        <div className="project-card-hover-details">
            {/* 3. Icon also removed from the hover title */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-details-desc" dangerouslySetInnerHTML={{ __html: project.details }}></p>
            <div className="project-details-links">
                {/* 4. Icon is now here, in front of the link text */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <GithubIcon />
                    <span>View on GitHub</span>
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="section-container">
            <div className="container mx-auto px-4 w-full">
                <div className="section-header">
                    <span className="section-title">/ projects</span>
                </div>
                <div className="project-card-grid">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;