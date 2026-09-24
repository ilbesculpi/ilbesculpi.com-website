import { useState } from "react";
import { Card, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import type { Route } from "./+types/contact";
import profile from "../data/profile";
import "./contact.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Ilbert Esculpi" },
    {
      name: "description",
      content:
        "Get in touch with Ilbert Esculpi for cloud architecture, high-concurrency backend systems, and full-stack development.",
    },
    { property: "og:title", content: "Contact - Ilbert Esculpi" },
    {
      property: "og:description",
      content:
        "Get in touch with Ilbert Esculpi for cloud architecture, high-concurrency backend systems, and full-stack development.",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(false);
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setValidated(false);
    setIsSubmitted(false);
  };

  const linkedinUrl =
    profile.linkedin || "https://www.linkedin.com/in/ilbesculpi";
  const whatsappUrl =
    profile.whatsapp || "https://wa.me/584125400877";
  const emailUrl = `mailto:${profile.email || "ilbert.esculpi@gmail.com"}`;

  return (
    <div className="contact-container">
      {/* Overview & Pitch Card */}
      <Card className="border-0 shadow-sm rounded-4 bg-white">
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span
              className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-semibold"
              style={{ fontSize: "0.8rem" }}>
              Contact & Collaboration
            </span>
          </div>

          <h1 className="fs-3 fw-bold text-dark mb-3">
            Let&apos;s Talk.
          </h1>

          <p className="contact-intro-p mb-3">            
            Big project, quick question, or just exploring potential collaboration?
            Feel free to reach out directly through any of the channels below.
            I&apos;m always happy to connect with teams solving interesting problems.
          </p>

          <p className="text-secondary small mb-0">
            Reach out directly via the channels below.
          </p>
        </Card.Body>
      </Card>

      {/* 3 Quick Contact CTA Buttons / Cards */}
      <div>
        <div
          className="text-uppercase text-muted fw-bold mb-3 small"
          style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}
        >
          Quick Connect Channels
        </div>

        <Row className="g-3">
          {/* LinkedIn CTA */}
          <Col xs={12} md={4}>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-card"
            >
              <div>
                <div className="cta-icon-wrapper cta-icon-linkedin">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.4 9.74V9.92H5.06v8.58h2.8z" />
                  </svg>
                </div>
                <div className="cta-card-title">LinkedIn</div>
                <div className="cta-card-desc">
                  Connect professionally and view full experience & recommendations.
                </div>
              </div>
              <div className="cta-card-action text-primary">
                <span>View Profile</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </a>
          </Col>

          {/* WhatsApp CTA */}
          <Col xs={12} md={4}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-card"
            >
              <div>
                <div className="cta-icon-wrapper cta-icon-whatsapp">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="currentColor"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.23 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.05.8 0.81-2.97-.19-.3a8.217 8.217 0 0 1-1.26-4.49c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z" />
                  </svg>
                </div>
                <div className="cta-card-title">WhatsApp</div>
                <div className="cta-card-desc">
                  Start an instant conversation for quick inquiries or real-time chat.
                </div>
              </div>
              <div className="cta-card-action text-success">
                <span>Start Chat</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </a>
          </Col>

          {/* Email CTA */}
          <Col xs={12} md={4}>
            <a href={emailUrl} className="contact-cta-card">
              <div>
                <div className="cta-icon-wrapper cta-icon-email">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="cta-card-title">Direct Email</div>
                <div className="cta-card-desc text-truncate">
                  {profile.email || "ilbert.esculpi@gmail.com"}
                </div>
              </div>
              <div className="cta-card-action text-dark">
                <span>Send Email</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </a>
          </Col>
        </Row>
      </div>

      {/* Visual Divider */}
      <div className="contact-section-divider">or send a message below</div>

      {/* "Get In Touch" Contact Form Card (Last Option) */}
      <Card className="border-0 shadow-sm rounded-4 bg-white">
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
            <h2 className="fs-4 fw-bold text-dark mb-0">Get In Touch</h2>
            <span className="text-muted small">All fields required</span>
          </div>

          <p className="text-secondary small mb-4">
            Prefer to write directly here? Leave your details and project
            overview, and I will get back to you promptly.
          </p>

          {isSubmitted ? (
            <Alert variant="success" className="rounded-4 border-0 p-4 mb-0">
              <div className="d-flex align-items-start gap-3">
                <span className="fs-4">🎉</span>
                <div className="flex-grow-1">
                  <Alert.Heading className="fs-5 fw-bold mb-1">
                    Thank you, {formData.name || "friend"}!
                  </Alert.Heading>
                  <p className="mb-3 small">
                    Your message has been received. I look forward to connecting
                    and will reply to <strong>{formData.email}</strong> as soon
                    as possible.
                  </p>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="rounded-pill px-3 fw-semibold"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            </Alert>
          ) : (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="g-3">
                {/* Name */}
                <Col xs={12} md={6}>
                  <Form.Group controlId="contactName">
                    <Form.Label className="contact-form-label">
                      Your Name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className="contact-form-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Email */}
                <Col xs={12} md={6}>
                  <Form.Group controlId="contactEmail">
                    <Form.Label className="contact-form-label">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="contact-form-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Subject */}
                <Col xs={12}>
                  <Form.Group controlId="contactSubject">
                    <Form.Label className="contact-form-label">
                      Subject
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Cloud Architecture Consultation / Backend Scaling"
                      className="contact-form-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a subject.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Message */}
                <Col xs={12}>
                  <Form.Group controlId="contactMessage">
                    <Form.Label className="contact-form-label">
                      Message
                    </Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your platform, architecture needs, or any specific questions..."
                      className="contact-form-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your message.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Submit Action */}
                <Col xs={12} className="pt-2 d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </Button>

                  <span className="text-secondary small">
                    Or email directly at{" "}
                    <a
                      href={emailUrl}
                      className="text-decoration-underline text-dark fw-semibold"
                    >
                      {profile.email || "ilbert.esculpi@gmail.com"}
                    </a>
                  </span>
                </Col>
              </Row>
            </Form>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
