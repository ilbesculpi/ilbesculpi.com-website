export type MediaOrientation = "landscape" | "portrait";

export interface ProjectMedia {
  type: "image" | "video";
  url: string;
  alt?: string;
}

export interface Project {
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

export type { Project as default };
