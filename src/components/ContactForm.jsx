"use client"
import { useState } from "react";
import "./ContactForm.css";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");
    setError("");

    try {


        const response = await fetch("https://formspree.io/f/xbgjenaw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("The message could not be sent.");
        }

      setStatus("success");
      setFormData(initialValues);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Try sending the message again.");
    }
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-card">
        <div className="contact-form-heading">
          <span className="contact-form-label">CONTACT FORM</span>

          <p>
            Tell me about your idea, project, or proposal - I’ll get back to you  as soon as possible.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="For example, Alexey."
                value={formData.name}
                onChange={handleChange}
                required
                minLength="2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">The Topic Of The Message</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="For example, website development."
              value={formData.subject}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your idea or task..."
              value={formData.message}
              onChange={handleChange}
              required
              minLength="10"
              rows="6"
            />
          </div>

          {status === "success" && (
            <p className="form-status form-status--success">
              The message has been sent. Thank you for contacting us!
            </p>
          )}

          {status === "error" && (
            <p className="form-status form-status--error">{error}</p>
          )}

          <button
            className="contact-submit-button"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send a message"}
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}