import { useState, useEffect } from "react";
import { Card, Badge, Modal } from "react-bootstrap";
import type { Route } from "./+types/projects";
import type { Project, ProjectMedia } from "../types";
import projectList from "../data/projects";
import ReactGA from 'react-ga4';
import "./projects.css";

const pageTags = {
  title: "Projects | Ilbert Esculpi",
  description: "Explore recent software architectures, mobile platforms, and distributed cloud systems engineered by Ilbert Esculpi.",
};

export function meta({ data, location }: any) {
  const origin = data?.origin ?? "https://ilbesculpi.com";
  const pageUrl = data?.canonicalUrl ?? `${origin}${location.pathname}`;
  const ogImageUrl = `${origin}/assets/projects/CharacterQuest01.jpeg`;
  return [
    {
      title: pageTags.title
    },
    {
      name: "description",
      content: pageTags.description,
    },
    {
      property: "og:title",
      content: pageTags.title,
    },
    {
      property: "og:description",
      content: pageTags.description,
    },
    { 
      property: "og:url",
      content: pageUrl
    },
    {
      property: "og:image",
      content: ogImageUrl
    },
    {
      property: "og:image:alt",
      content: "GameQuest Photo"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
  ];
}

export interface ProjectsProps {
  projects?: Project[];
}

export default function Projects() {

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/projects",
      title: pageTags.title,
    });
  }, []);

  const [activeMedia, setActiveMedia] = useState<{
    media: ProjectMedia;
    projectTitle: string;
  } | null>(null);

  const handleClose = () => setActiveMedia(null);

  return (
    <div className="projects-container">
      
      {/* Header */}
      <div className="bg-white p-4 rounded-4 shadow-sm border-0">
        <h2 className="h4 fw-bold text-dark mb-1">Featured Projects</h2>
        <p className="text-secondary mb-0 small">
          A collection of systems, mobile products, and fun projects I have engineered.
        </p>
      </div>

      {/* Projects */}
      {projectList.map((project) => (
        <Card key={project.id} className="border-0 shadow-sm rounded-4 project-card bg-white">
          <Card.Body className="p-4">
            
            {/* Title & Role */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <h3 className="h5 fw-bold text-dark mb-0">{project.title}</h3>
              <Badge bg="primary-subtle"
                className="text-primary project-role-badge px-2.5 py-1.5 rounded-pill border border-primary-subtle">
                {project.role}
              </Badge>
            </div>

            <p className="text-secondary project-desc mb-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="d-flex flex-wrap gap-1 mb-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Gallery */}
            {project.media.length > 0 && (
              <div>
                <div className="text-uppercase text-muted fw-bold mb-2"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.06em" }}>
                  Media & Previews
                </div>
                
                {/* Grid wrapper gets the orientation class */}
                <div className={`project-media-grid ${project.orientation}`}>
                  {project.media.map((item, index) => (
                    <div key={index} role="button" tabIndex={0}
                      className="project-media-thumb" title="Click to expand"
                      onClick={() =>
                        setActiveMedia({ media: item, projectTitle: project.title })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveMedia({ media: item, projectTitle: project.title });
                        }
                      }}>
                      {item.type === "video" ? (
                        <video src={item.url} preload="metadata" muted />
                      ) : (
                        <img
                          src={item.url}
                          alt={item.alt || `${project.title} preview`}
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}

      {/* Bootstrap Lightbox Modal */}
      <Modal
        show={activeMedia !== null}
        onHide={handleClose}
        centered
        size="xl"
        className="lightbox-modal">
        <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25 pb-2">
          <Modal.Title className="text-white fs-6">
            {activeMedia?.projectTitle} — Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-2 d-flex justify-content-center align-items-center">
          {activeMedia && (
            <div className="lightbox-media-container">
              {activeMedia.media.type === "video" ? (
                <video
                  src={activeMedia.media.url}
                  controls
                  autoPlay
                  className="shadow-lg"
                />
              ) : (
                <img
                  src={activeMedia.media.url}
                  alt={activeMedia.media.alt || activeMedia.projectTitle}
                  className="shadow-lg"
                />
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>

    </div>
  );
}
