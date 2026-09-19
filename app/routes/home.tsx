import { Row, Col, Card } from "react-bootstrap";
import type { Route } from "./+types/home";
import "./about.css";
import profile from "../data/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Ilbert Esculpi" },
    { name: "description", content: "Full-Stack Software Developer & Cloud Architect." },
  ];
}

const PILLARS = [
  {
    icon: "☁️",
    iconBg: "#EFF6FF",
    title: "Cloud Infrastructure & Security",
    description:
      "Architecting resilient systems across AWS & GCP. Specialized in VPC isolation, strict IAM policies, containerized deployments, and serverless backends.",
  },
  {
    icon: "⚡",
    iconBg: "#FEF3C7",
    title: "High-Concurrency Backend",
    description:
      "Engineering robust REST & event-driven microservices using Node.js, NestJS, and TypeScript. Optimized for low latency, caching layers, and search engines.",
  },
  {
    icon: "📱",
    iconBg: "#EDFAF2",
    title: "Full-Stack & Mobile Delivery",
    description:
      "Crafting end-to-end user experiences across modern web frameworks (React, Next.js) and native/cross-platform mobile apps (SwiftUI, React Native).",
  },
  {
    icon: "🗄️",
    iconBg: "#F5F3FF",
    title: "Data Pipelines & Storage",
    description:
      "Designing clean relational schemas, distributed NoSQL stores, and analytical ingest pipelines with PostgreSQL, Firebase, Solr, and BigQuery.",
  },
];

const METRICS = [
  { value: "10+", label: "Years Experience" },
  { value: "AWS & GCP", label: "Cloud Platforms" },
  { value: "Production", label: "Secure & scalable systems" },
];

export default function Home() {
  return (
    <div className="about-container">
      
      {/* Bio Card */}
      <Card className="border-0 shadow-sm rounded-4 bg-white">
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-semibold" style={{ fontSize: "0.8rem" }}>
              Cloud & Backend Specialist
            </span>
          </div>

          <h2 className="fs-3 fw-bold text-dark mb-3">
            Engineering scalable backend architectures and modern full-stack platforms.
          </h2>

          <p className="about-intro-p mb-3">
            I help organizations build and scale robust, high-performance, and secure backend platforms in the cloud. With over a decade of hands-on software engineering, my focus is enabling frictionless technical growth through resilient cloud primitives, high-throughput architectures, and clean maintainable codebases.
          </p>
          <p className="about-intro-p mb-0">
            Whether designing distributed microservices with Apache Solr and BigQuery, orchestrating containerized services in AWS/GCP, or shipping full-stack products from concept to deployment, I build systems designed to safeguard mission-critical assets from day one.
          </p>

          {/* Quick Metrics Bar */}
          <Row className="g-3 mt-4 pt-2">
            {METRICS.map((m, idx) => (
              <Col key={idx} xs={12} sm={4}>
                <div className="metric-box">
                  <div className="metric-number">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* What I Do / Pillars Section */}
      <Card className="border-0 shadow-sm rounded-4 bg-white">
        <Card.Body className="p-4 p-md-5">
          <h3 className="fs-5 fw-bold text-dark mb-1">What I Do</h3>
          <p className="text-secondary small mb-4">
            Core engineering areas and architectural responsibilities I focus on.
          </p>

          <Row className="g-3">
            {PILLARS.map((pillar, idx) => (
              <Col key={idx} xs={12} md={6}>
                <div className="pillar-card">
                  <div className="pillar-icon" style={{ backgroundColor: pillar.iconBg }}>
                    {pillar.icon}
                  </div>
                  <div className="pillar-title">{pillar.title}</div>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
