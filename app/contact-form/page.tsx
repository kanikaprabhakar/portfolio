"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", note: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", note: "" });
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending message.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="form-container">
      <section className="section form-section">
        <div className="form-wrapper">
          <h1 className="form-title">Send me a note</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="note" className="form-label">
                Note
              </label>
              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Write your message here..."
                rows={8}
              />
            </div>

            <button type="submit" disabled={loading} className="form-button">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {message && <p className="form-message">{message}</p>}
        </div>
      </section>
    </main>
  );
}
