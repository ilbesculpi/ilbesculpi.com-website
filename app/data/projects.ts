import type { Project } from "../types";

const projects: Project[] = [
    {
    id: "characters-quest",
    title: "CharactersQuest (Personal Project)",
    role: "Mobile App Developer",
    description:
      "Cross-platform interactive guessing game featuring real-time state synchronization, automated cloud scheduled functions, and offline session resilience.",
    techStack: ["React Native", "Firebase", "TypeScript"],
    orientation: "portrait",
    media: [
      { type: "image", url: "/assets/projects/CharacterQuest01.jpeg", alt: "Home Screen" },
      { type: "image", url: "/assets/projects/CharacterQuest02.jpeg", alt: "Question Round Screen" },
      { type: "image", url: "/assets/projects/CharacterQuest03.jpeg", alt: "Game Ended Screen" },
    ],
    enabled: true,
  },
  {
    id: "preztamos",
    title: "Preztamos.com",
    role: "Backend Developer & Cloud Engineer",
    description:
      "Distributed lending microservices platform. Engineered low-latency Apache Solr index clusters, automated BigQuery data ingestion pipelines, and implemented resilient cloud network topologies.",
    techStack: ["GCP", "Firebase", "Node.js", "TypeScript", "Apache Solr", "BigQuery"],
    orientation: "landscape",
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
    orientation: "portrait",
    media: [
      { type: "image", url: "/assets/projects/autotrade01.jpg", alt: "Live Bidding Auction" },
      { type: "image", url: "/assets/projects/autotrade02.jpg", alt: "Vehicle Appraisal Scanner" },
      { type: "image", url: "/assets/projects/autotrade03.jpg", alt: "Inspection Flow View" },
      { type: "image", url: "/assets/projects/autotrade04.jpg", alt: "Inspection Flow View" },
    ],
    enabled: true,
  },
  
];

export default projects;
