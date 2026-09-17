import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        index("routes/home.tsx"),
        route("projects", "routes/projects.tsx"),
        route("contact", "routes/contact.tsx"),
    ])
] satisfies RouteConfig;
