import { NavLink, Outlet } from "react-router";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Sidebar from "~/layout/sidebar";
import Header from "~/layout/header";

export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <header className="bg-dark text-white py-3 mb-4 shadow-sm">
        <Container>
          <h1 className="h4 mb-0">My Website</h1>
        </Container>
      </header>

      <Container className="flex-grow-1 mb-4">
        <Row className="g-4">
          {/* Left Column */}
          <Col xs={12} md={4}>
            <Sidebar />
          </Col>

          {/* Right Column */}
          <Col xs={12} md={8}>
            {/* White Navbar with box-style tabs */}
            <Navbar className="custom-navbar rounded-4 shadow-sm mb-4 px-3 py-3 border-0">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                {/* Home */}
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-box ${isActive ? "active" : ""}`
                  }
                >
                  <span className="nav-box-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>
                  <span className="nav-box-label">Home</span>
                </NavLink>

                {/* Projects */}
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-box ${isActive ? "active" : ""}`
                  }
                >
                  <span className="nav-box-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </span>
                  <span className="nav-box-label">Projects</span>
                </NavLink>

                {/* Contact */}
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-box ${isActive ? "active" : ""}`
                  }
                >
                  <span className="nav-box-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="nav-box-label">Contact</span>
                </NavLink>
              </div>
            </Navbar>

            {/* Page Content Outlet */}
            <main>
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
