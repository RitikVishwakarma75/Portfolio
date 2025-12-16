import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./footer.css";

function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  const openLink = (url) => window.open(url, "_blank");

  return (
    <footer className="footer premium-footer">
      {/* Left Section */}
      <div className="footer-left reveal-left">
        <h3 className="footer-brand">Ritik Vishwakarma</h3>

        <ul className="footer-links">
          <li
            onClick={() =>
              openLink("mailto:ritikvishwakarma.mailbox@gmail.com")
            }
          >
            Email
          </li>
          <li
            onClick={() =>
              openLink(
                "https://drive.google.com/file/d/12hqr1fqyqHOVbcnRHKUMYkapnFk_VE4P/view"
              )
            }
          >
            Resume
          </li>
          <li onClick={() => alert("📞 +91 750502409X")}>Contact</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="footer-form reveal-right">
        <p className="footer-eyebrow">READY TO COLLABORATE?</p>
        <h2>Let’s create something epic together</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
              required
            />
          </div>

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message *"
            required
          />

          <button type="submit" className="submit-btn">
            Send Message →
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
