import { useState } from "react";
import { Card, Badge, Modal } from "react-bootstrap";
import "./projects.css";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Projects | Ilbert Esculpi"
    },
    {
      name: "description",
      content: "Explore recent software architectures, mobile platforms, and distributed cloud systems engineered by Ilbert Esculpi.",
    },
    {
      property: "og:title",
      content: "Projects - Ilbert Esculpi"
    },
    {
      property: "og:description",
      content: "Explore recent software architectures, mobile platforms, and distributed cloud systems engineered by Ilbert Esculpi.",
    },
    { 
      property: "og:url",
      content: "https://main.d2iqrhfsi9eh3a.amplifyapp.com/projects"
    },
    {
      property: "og:image",
      content: "https://main.d2iqrhfsi9eh3a.amplifyapp.com/avatar.png"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
  ];
}


type MediaOrientation = "landscape" | "portrait";

interface ProjectMedia {
  type: "image" | "video";
  url: string;
  alt?: string;
}

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  orientation: MediaOrientation;
  media: ProjectMedia[];
  liveUrl?: string;
  enabled: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "preztamos",
    title: "Preztamos.com",
    role: "Senior Backend Developer",
    description:
      "Distributed lending microservices platform. Engineered low-latency Apache Solr index clusters, automated BigQuery data ingestion pipelines, and implemented resilient cloud network topologies.",
    techStack: ["Node.js", "TypeScript", "Apache Solr", "BigQuery", "GCP", "Docker"],
    orientation: 'landscape',
    media: [
      { type: "image", url: "/assets/projects/preztamos_home.png", alt: "Preztamos.com Inicio" },
      { type: "image", url: "/assets/projects/preztamos_dashboard.png", alt: "Preztamos.com admin dashboard" },
      { type: "image", url: "/assets/projects/preztamos_metrics.png", alt: "Preztamos.com dashboard metrics" },
    ],
    enabled: true,
  },
  {
    id: "autotrade",
    title: "AutoTrade",
    role: "Backend / Mobile App Developer",
    description:
      "Real-time vehicle valuation appraisal and live bidding marketplace. Powered by an event-driven Firebase backend engine and native iOS auction interfaces.",
    techStack: ["Swift", "SwiftUI", "Firebase", "Node.js", "Firestore"],
    orientation: 'portrait',
    media: [
      { type: "image", url: "/assets/projects/autotrade01.jpg", alt: "Live Bidding Auction" },
      { type: "image", url: "/assets/projects/autotrade02.jpg", alt: "Vehicle Appraisal Scanner" },
      { type: "image", url: "/assets/projects/autotrade03.jpg", alt: "Inspection Flow View" },
      { type: "image", url: "/assets/projects/autotrade04.jpg", alt: "Inspection Flow View" },
    ],
    enabled: true,
  },
  {
    id: "characters-quest",
    title: "CharactersQuest (Personal Project)",
    role: "Mobile App Developer",
    description:
      "Cross-platform interactive guessing game featuring real-time state synchronization, automated cloud scheduled functions, and offline session resilience.",
    techStack: ["React Native", "Expo", "Firebase", "TypeScript"],
    orientation: 'portrait',
    media: [
      { type: "image", url: "/assets/projects/CharacterQuest01.jpeg", alt: "Home Screen" },
      { type: "image", url: "/assets/projects/CharacterQuest02.jpeg", alt: "Question Round Screen" },
      { type: "image", url: "/assets/projects/CharacterQuest03.jpeg", alt: "Game Ended Screen" },
    ],
    enabled: true,
  },
];

export default function Projects() {

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
          A collection of cloud architectures, mobile products, and backend systems I have engineered.
        </p>
      </div>

      {/* Projects */}
      {PROJECTS.map((project) => (
        <Card key={project.id} className="border-0 shadow-sm rounded-4 project-card bg-white">
          <Card.Body className="p-4">
            {/* Title & Role */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <h3 className="h5 fw-bold text-dark mb-0">{project.title}</h3>
              <Badge
                bg="primary-subtle"
                className="text-primary project-role-badge px-2.5 py-1.5 rounded-pill border border-primary-subtle"
              >
                {project.role}
              </Badge>
            </div>

            {/* Description */}
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

            {/* Gallery applying project-level orientation */}
            {project.media.length > 0 && (
              <div>
                <div
                  className="text-uppercase text-muted fw-bold mb-2"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.06em" }}
                >
                  Media & Previews
                </div>
                
                {/* ⬇️ Grid wrapper gets the orientation class */}
                <div className={`project-media-grid ${project.orientation}`}>
                  {project.media.map((item, index) => (
                    <div
                      key={index}
                      role="button"
                      tabIndex={0}
                      className="project-media-thumb"
                      onClick={() =>
                        setActiveMedia({ media: item, projectTitle: project.title })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveMedia({ media: item, projectTitle: project.title });
                        }
                      }}
                      title="Click to expand"
                    >
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
        className="lightbox-modal"
      >
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
