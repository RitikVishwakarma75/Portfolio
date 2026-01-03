import React from "react";
import "./header.css";

function Header() {
  // alert("page is in working progress");
  const handleResumeAction = () => {
    const userConfirmed = window.confirm("Do you want to view the resume?");

    if (userConfirmed) {
      window.open(
        "https://drive.google.com/file/d/1boJXu0J2yrzlOgyWZchz5AfnxgiCoYt5/view?usp=sharing",
        "_blank"
      );
    } else {
      alert("No worries, maybe later!");
    }
  };
  

  const handleConnectClick = () => {
    // Replace with your actual contact number
    const contactNumber = "+91 7505024092";
    alert(`You can contact me at: ${contactNumber}`);
    // Alternatively, you can make a phone call if the browser supports it
    // window.location.href = `tel:${contactNumber}`;
  };

  const handleBlogClick = () => {
    alert("Blog is under construction. Please check back later.");
  };

  return (
    <header className="app-header">
      <li className="social-media-Icon" onMouseOver={() => {}}>
        <i
          className="fa-brands fa-instagram fa-lg"
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://www.instagram.com/ritik_.750/profilecard/?igsh=MWU3NjFmNmMydGNzYw=="
            );
          }}
        ></i>
        <i
          className="fa-brands fa-twitter fa-lg"
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://x.com/RitikVi75174036?t=qK8031Pm7YDagvJtC-En7g&s=09"
            );
          }}
        ></i>
        <i
          className="fa-brands fa-facebook-f fa-lg"
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => {
            window.open("https://www.facebook.com/share/1Bn1qaGdma/");
          }}
        ></i>
        <i
          className="fa-brands fa-linkedin-in fa-lg"
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/ritik-vishwakarma-294282299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            );
          }}
        ></i>
      </li>

      <h1
        className="top-header"
        onClick={() => {
          window.open("Google.com");
        }}
      >
        Ritik Vishwakarma
      </h1>

      <li className="function">
        <button
          className="function-btn"
          onClick={handleResumeAction} // Calling the enhanced function
        >
          Resume
        </button>
        <button className="function-btn" onClick={handleBlogClick}>
          Blog
        </button>
        <button
          className="function-btn"
          onClick={handleConnectClick} // Show the contact number when clicked
        >
          Contact
        </button>
      </li>
    </header>
  );
}

export default Header;
