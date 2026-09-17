import { Card, Badge } from "react-bootstrap";
import "./projects.css";

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
  media: ProjectMedia[];
  liveUrl?: string;
  enabled: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "condoflow",
    title: "CondoFlow",
    role: "Lead Full-Stack Architect",
    description:
      "A complete property management and administrative operations platform featuring automated unit billing, resident portal management, and granular permission architectures.",
    techStack: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    media: [
      { type: "image", url: "projects/condoflow-1.png", alt: "CondoFlow Dashboard" },
      { type: "image", url: "projects/condoflow-2.png", alt: "Unit Accounts Billing" },
      { type: "image", url: "projects/condoflow-3.png", alt: "Resident Maintenance Requests" },
    ],
    enabled: false,
  },
  {
    id: "preztamos",
    title: "Preztamos.com",
    role: "Senior Backend Developer",
    description:
      "Distributed lending microservices platform. Engineered low-latency Apache Solr index clusters, automated BigQuery data ingestion pipelines, and implemented resilient cloud network topologies.",
    techStack: ["Node.js", "TypeScript", "Apache Solr", "BigQuery", "GCP", "Docker"],
    media: [
      { type: "image", url: "assets/projects/preztamos_home.png", alt: "Preztamos.com Inicio" },
      { type: "image", url: "assets/projects/preztamos_dashboard.png", alt: "Preztamos.com admin dashboard" },
      { type: "image", url: "assets/projects/preztamos_metrics.png", alt: "Preztamos.com dashboard metrics" },
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
    media: [
      { type: "image", url: "/projects/quest-1.png", alt: "Question Round Screen" },
      { type: "image", url: "/projects/quest-2.png", alt: "Multiplayer Leaderboard" },
    ],
    enabled: true,
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      {/* Header section */}
      <div className="bg-white p-4 rounded-4 shadow-sm border-0">
        <h2 className="h4 fw-bold text-dark mb-1">Featured Projects</h2>
        <p className="text-secondary mb-0 small">
          A collection of cloud architectures, mobile products, and backend systems I have engineered.
        </p>
      </div>

      {/* Projects List */}
      {PROJECTS.filter(project => project.enabled).map((project) => (
        <Card key={project.id} className="border-0 shadow-sm rounded-4 project-card bg-white">
          <Card.Body className="p-4">
            {/* Title & Role Header */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <h3 className="h5 fw-bold text-dark mb-0">{project.title}</h3>
              <Badge bg="primary-subtle" className="text-primary project-role-badge px-2.5 py-1.5 rounded-pill border border-primary-subtle">
                {project.role}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-secondary project-desc mb-3">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="d-flex flex-wrap gap-1.5 mb-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Screenshots / Video Gallery */}
            {project.media.length > 0 && (
              <div>
                <div className="text-uppercase text-muted fw-bold mb-2" style={{ fontSize: "0.7rem", letterSpacing: "0.06em" }}>
                  Screenshots & Previews
                </div>
                <div className="project-media-row">
                  {project.media.map((item, index) => (
                    <div key={index} className="project-media-thumb">
                      {item.type === "video" ? (
                        <video src={item.url} controls preload="metadata" />
                      ) : (
                        <img src={item.url} alt={item.alt || `${project.title} preview`} loading="lazy" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
