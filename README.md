# Ilbert Esculpi - Personal Portfolio & Engineering Showcase

A personal portfolio website and engineering showcase built with **React Router v7** and **React-Bootstrap**. Designed to highlight cloud architectures, microservices platforms, and mobile applications with an interactive, responsive interface.

---

## 🚀 Tech Stack

- **Framework:** [React Router v7](https://reactrouter.com/) (SSR & pathless layout route configuration)
- **UI & Grid System:** [React-Bootstrap](https://react-bootstrap.netlify.app/) (Bootstrap 5)
- **Styling:** Custom Modular CSS with CSS Grid and flexbox architecture
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Language:** TypeScript
- **Runtime & Bundler:** Node.js / Vite

---

## ✨ Features

- **Pathless Layout Routing (`routes/_layout.tsx`):** Unifies global layout state, shared navigation headers, and route-driven `<Outlet />` lifecycles.
- **Two-Column Sticky Architecture:**
  - **4/12 Sidebar Profile:** Interactive contact links, avatar banner, and data-driven SVG skill matrices (Frontend, Backend & Cloud, Mobile).
  - **8/12 Dynamic Workspace:** Tabbed horizontal box navigation directing sub-routes seamlessly.
- **Dynamic Media Grid with Lightbox:**
  - Configurable aspect ratios at the project entity level: `16:9` widescreen landscape (3 columns) for web dashboards versus `9:19.5` portrait (4 columns) for mobile apps.
  - Zero-dependency media modal for fullscreen screenshot/video inspection powered by native React-Bootstrap components.
- **Mobile-Responsive Breakdown:** Columns gracefully shift to a 12/12 vertical stack layout below `md` viewports.
