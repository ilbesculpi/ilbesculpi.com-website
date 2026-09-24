import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { Container, Row, Col, Navbar, Offcanvas } from "react-bootstrap";
import Sidebar from "~/layout/sidebar";
import Header from "~/layout/header";
import profile from "../data/profile";

export default function AppLayout() {
  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const isHomePage = location.pathname === "/";

  // Automatically close offcanvas when route changes
  useEffect(() => {
    setShowDrawer(false);
  }, [location.pathname]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header
        brandTitle={profile.name}
        onToggleMenu={() => setShowDrawer((prev) => !prev)}
      />

      <Container className="flex-grow-1 mb-4">
        <Row className="g-4">
          {/* Left Column (Sidebar) */}
          {/* On Desktop (md+): always visible */}
          {/* On Mobile (<md): visible ONLY on home page; hidden on secondary pages */}
          <Col xs={12} md={4} className={isHomePage ? "" : "d-none d-md-block"}>
            <Sidebar profile={profile} />
          </Col>

          {/* Right Column (Navbar + Page Content) */}
          <Col xs={12} md={8}>
            
            <Navbar className="custom-navbar rounded-4 shadow-sm mb-4 px-3 py-3 border-0">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                {/* Home */}
                <NavLink to="/" end className={({ isActive }) => `nav-box ${isActive ? "active" : ""}`}>
                  <span className="nav-box-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>
                  <span className="nav-box-label">Home</span>
                </NavLink>

                {/* Projects */}
                <NavLink to="/projects" className={({ isActive }) => `nav-box ${isActive ? "active" : ""}`}>
                  <span className="nav-box-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </span>
                  <span className="nav-box-label">Projects</span>
                </NavLink>

                {/* Contact */}
                <NavLink to="/contact" className={({ isActive }) => `nav-box ${isActive ? "active" : ""}`}>
                  <span className="nav-box-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
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

      {/* Mobile Slide-Out Menu / Offcanvas Drawer */}
      <Offcanvas
        show={showDrawer}
        onHide={() => setShowDrawer(false)}
        placement="start"
        className="mobile-sidebar-drawer"
      >
        <Offcanvas.Header closeButton closeVariant="white" className="bg-dark text-white border-bottom border-secondary border-opacity-25">
          <Offcanvas.Title className="fs-6 fw-semibold mb-0">
            {profile.name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-3 bg-light">
          {/* Quick Page Links */}
          <div className="drawer-nav mb-3">
            <div className="text-uppercase text-muted fw-bold mb-2 small" style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}>
              Navigation
            </div>
            <div className="d-flex flex-column gap-2">
              <NavLink
                to="/"
                end
                onClick={() => setShowDrawer(false)}
                className={({ isActive }) =>
                  `drawer-nav-item ${isActive ? "active" : ""}`
                }
              >
                <span className="drawer-nav-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setShowDrawer(false)}
                className={({ isActive }) =>
                  `drawer-nav-item ${isActive ? "active" : ""}`
                }
              >
                <span className="drawer-nav-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
                <span>Projects</span>
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setShowDrawer(false)}
                className={({ isActive }) =>
                  `drawer-nav-item ${isActive ? "active" : ""}`
                }
              >
                <span className="drawer-nav-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>Contact</span>
              </NavLink>
            </div>
          </div>

          {/* Profile Sidebar */}
          <Sidebar profile={profile} inDrawer={true} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
