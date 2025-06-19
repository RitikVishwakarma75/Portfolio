import React, { useState } from "react";
import "./footer.css";

function Footer() {
  // State to manage form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Resume action handler
  const handleResumeAction = () => {
    const userConfirmed = window.confirm("Do you want to download the resume?");
    if (userConfirmed) {
      const newTab = window.open("/assets/resume.pdf", "_blank");
      if (newTab) newTab.focus();

      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/file/d/1UHjRnGIgWTiaGjSgb0uez6oXs0hQOC7S/view?usp=drivesdk";
      link.download = "Ritik_Vishwakarma_Resume.pdf";
      link.click();
    } else {
      alert("No worries, maybe later!");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add logic to send form data to an API or email
    // For now, let's just log it
    console.log("Form submitted with data:", formData);

    // Optionally, you can reset the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    // Optional: Show a confirmation message or redirect the user
    alert("Thank you for contacting us!");
  };

  const openEmail = () => {
    const email = "ritikvishwakarma.mailbox@gmail.com";
    const subject = "Subject of the email";
    const body = "Type your message here...";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleConnectClick = () => {
    const contactNumber = "+91 750502409X";
    alert(`You can contact me at: ${contactNumber}`);
  };

  const handleBlogClick = () => {
    alert("Blog is under construction. Please check back later.");
  };

  const handleAddressClick = () => {
    alert("Address is under construction. Please check back later.");
  };

  return (
    <footer className="footer">
      <div className="leftbox">
        <div className="links">
          <ul
            className="a-links"
            style={{ listStyleType: "none", cursor: "pointer" }}
          >
            <li onClick={openEmail}>Email</li>
            <li onClick={handleAddressClick}>Address</li>
          </ul>
          <ul
            className="b-links"
            style={{ listStyleType: "none", cursor: "pointer" }}
          >
            <li onClick={handleResumeAction}>Resume</li>
            <li onClick={handleBlogClick}>Blog</li>
            <li onClick={handleConnectClick}>Contact</li>
          </ul>
        </div>
        <div className="logo">
          <ul className="social-media-Icon">
            <li>
              <i
                className="fa-brands fa-instagram fa-lg"
                style={{ color: "#e6e7eb", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/ritik_.750/profilecard/?igsh=MWU3NjFmNmMydGNzYw=="
                  );
                }}
              ></i>
            </li>
            <li>
              <i
                className="fa-brands fa-twitter fa-lg"
                style={{ color: "#e6e7eb", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://x.com/RitikVi75174036?t=qK8031Pm7YDagvJtC-En7g&s=09"
                  );
                }}
              ></i>
            </li>
            <li>
              <i
                className="fa-brands fa-facebook-f fa-lg"
                style={{ color: "#e6e7eb", cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.facebook.com/share/1Bn1qaGdma/");
                }}
              ></i>
            </li>
            <li>
              <i
                className="fa-brands fa-linkedin-in fa-lg"
                style={{ color: "#e6e7eb", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/ritik-vishwakarma-294282299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  );
                }}
              ></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="info">
        <header>READY TO COLLABORATE?</header>
        <h1>Let's create something epic together</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">FIRST NAME *</label>
          <input
            className="enter"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
          <label htmlFor="last-name">LAST NAME *</label>
          <input
            className="enter"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
          <label htmlFor="email">EMAIL *</label>
          <input
            className="enter"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your e-mail"
            required
          />
          <label htmlFor="message">MESSAGE *</label>
          <textarea
            className="area"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            required
          ></textarea>
          <div className="fbtn">
            <button className="finalbtn" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
