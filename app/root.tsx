import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";

const pageTags = {
  title: "Ilbert Esculpi - Full-Stack Software Developer & Cloud Engineer",
  description: "Engineering robust backend platforms, cloud infrastructure across AWS & GCP, full-stack web and mobile applications.",
  url: "https://main.d2iqrhfsi9eh3a.amplifyapp.com/",
  image: "https://main.d2iqrhfsi9eh3a.amplifyapp.com/avatar.png",
};

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);

  // AWS ALB / CloudFront forward the real host and protocol here
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto") || "https";

  const host = forwardedHost || url.host;
  const protocol = forwardedHost ? forwardedProto : url.protocol.replace(":", "");
  const origin = `${protocol}://${host}`;

  return {
    origin,
    canonicalUrl: `${origin}${url.pathname}`,
  };
}

// Global Social Media & SEO Tags
export const meta: Route.MetaFunction = ({ data, location }) => {
  // Fallback origin if loader data is undefined (e.g. error boundary renders)
  const origin = data?.origin ?? "https://ilbesculpi.com";
  const canonicalUrl = data?.canonicalUrl ?? `${origin}${location.pathname}`;
  const ogImageUrl = `${origin}/avatar.png`;
  return [
    {
      title: pageTags.title
    },
    {
      name: "description",
      content: pageTags.description
    },
    {
      name: "tags",
      content: "Software Engineer, Full-Stack Developer, Cloud Engineer, Cloud Architect, AWS Developer, AWS Engineer, GCP Engineer, GCP Developer"
    },
    {
      name: "author",
      content: "Ilbert Esculpi"
    },

    // Open Graph / Facebook / LinkedIn / WhatsApp
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: canonicalUrl
    },
    {
      property: "og:title",
      content: pageTags.title
    },
    {
      property: "og:description",
      content: pageTags.description
    },
    {
      property: "og:image",
      content: ogImageUrl
    },
    {
      property: "og:image:alt",
      content: "Ilbert Esculpi Profile Photo"
    },

    // Twitter / X Card
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: pageTags.title
    },
    {
      name: "twitter:description",
      content: pageTags.description
    },
    {
      name: "twitter:image",
      content: ogImageUrl
    },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
