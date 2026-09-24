import { Container, Button } from "react-bootstrap";
import { Link } from "react-router";

export interface HeaderProps {
  onToggleMenu?: () => void;
  brandTitle?: string;
}

export default function Header({
  onToggleMenu,
  brandTitle = "Ilbert Esculpi",
}: HeaderProps) {
  return (
    <header className="bg-dark text-white py-3 mb-4 shadow-sm">
      <Container className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {onToggleMenu && (
            <Button
              variant="link"
              onClick={onToggleMenu}
              className="header-menu-btn d-md-none text-white p-2 d-flex align-items-center justify-content-center text-decoration-none"
              aria-label="Toggle navigation and profile menu">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          )}
          <Link
            to="/"
            className="text-white text-decoration-none d-flex align-items-center gap-2">
            <h1 className="h5 mb-0 fw-bold">{brandTitle}</h1>
          </Link>
        </div>

        <div className="d-none d-sm-block text-secondary small">
          Full-Stack & Cloud Architect
        </div>
      </Container>
    </header>
  );
}
