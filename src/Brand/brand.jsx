import React from "react";
import "./brand.css";

function Brand(props) {
  const handleReadClick = () => {
    alert("page is under construction");
  };

  return (
    <div className="brand-Story">
      <div className="brand-Story-Text">
        <p>HEY !</p>
        <span className="brand-para">
          My work is a reflection of my commitment to my clients.
        </span>
        <button className="brand-btn">
          <span>Scroll Upper side</span>
          <span className="arrow">
            <i className="fas fa-arrow-up la"></i>
          </span>
        </button>
      </div>
      <div className="swip-box-slider">
        <div className="slider-track">
          {/* Original Slides */}
          <div className="slide">
            <a href="https://ritikvishwakarma75.github.io/project---Movie/">
              <img src={props.image1} alt="Project 1" />
            </a>
            <p className="p-name">Bing Box</p>
          </div>
          <div className="slide">
            <img src={props.image2} alt="Project 2" />
            <p className="p-name">E-Commerce web UI</p>
          </div>
          <div className="slide">
            <img src={props.image3} alt="Project 3" />
            <p>Weather Web</p>
          </div>

          {/* Duplicated Slides (for seamless train effect) */}
          <div className="slide">
            <a href="https://ritikvishwakarma75.github.io/project---Movie/">
              <img src={props.image1} alt="Project 1" />
            </a>
            <p className="p-name">Bing Box</p>
          </div>
          <div className="slide">
            <img src={props.image2} alt="Project 2" />
            <p className="p-name">E-Commerce web UI</p>
          </div>
          <div className="slide">
            <img src={props.image3} alt="Project 3" />
            <p>Weather Web</p>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-text">
          <h1 className="h1">About Me</h1>
          <p className="about-para">
            <ul className="about-list">
              <li>
                👩‍🎓 <strong>B.Tech in Computer Science & Engineering</strong> at
                Galgotias University (2022–2026) | CGPA: 7.42
              </li>
              <li>
                💻 Passionate about <strong>Full-Stack Development</strong>,{" "}
                <strong>Artificial Intelligence</strong>, and{" "}
                <strong>Building real-world project</strong>
              </li>
              <li>
                🌱 Currently sharpening skills in <strong>Java</strong>,{" "}
                <strong>Data Structures & Algorithms</strong>, and{" "}
                <strong>DataBases</strong>
              </li>
              <li>
                {" "}
                <strong>
                  🎥 Built a responsive web application that plays official
                  movie trailers using real-time data.
                </strong>{" "}
                and{" "}
                <strong>
                  Developed a responsive Front-page E-commerce 🛒 UI inspired by
                  Amazon.
                </strong>
              </li>
              <li>
                📈 Solved <strong> DSA problems</strong> on{" "}
                <a
                  href="https://leetcode.com/u/ritikvishwakarma75/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
              </li>

              <li>
                📫 Email:{" "}
                <a href="mailto:ritikvishwakarma.mailbox@gmail.com">
                  ritikvishwakarma.mailbox@gmail.com
                </a>
              </li>
              <li>
                🔗 LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/ritik-vishwakarma-294282299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  your-profile-link
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-heading">🛠️ Skills & Technologies</div>
        <div className="service-card">
          <div className="skill-card">
            <h3>💻 Languages & Databases</h3>
            <ul className="skill-list">
              <li>Java</li>
              <li>MySql</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>🌐 Web Technologies</h3>
            <ul className="skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js (Basics)</li>
              <li>Firebase (Basics)</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>🧰 Tools & Frameworks</h3>
            <ul className="skill-list">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Intellij IDEA</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects">
        <h1 className="projects-heading">💼 Projects</h1>
        <div className="projects-box">
          <div className="project-card">
            <h3>🎥 BingBox – Movie Trailer UI</h3>
            <p>
              Developed a dynamic trailer browsing platform using{" "}
              <strong>React</strong>.<br />
              Implemented trailer playback, smooth animations, and responsive UI
              components.
              <br />
              Built for showcasing movies with interactive UI and clean visuals.
            </p>
            <a
              href="https://your-bingbox-live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View Project
            </a>
          </div>

          <div className="project-card">
            <h3>🛍️ E-Commerce UI with Add-to-Cart</h3>
            <p>
              Created a fully responsive <strong>E-Commerce UI</strong> using{" "}
              <strong>HTML, CSS & JavaScript</strong>.<br />
              Features include product listing, detailed product views, and an
              interactive <strong>Add-to-Cart</strong> functionality.
              <br />
              Focused on clean layout, mobile responsiveness, and shopping cart
              logic.
            </p>
            <a
              href="https://your-ecommerce-live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View Project
            </a>
          </div>

          <div className="project-card">
            <h3>🌦️ Weather App with API Integration</h3>
            <p>
              Built a dynamic <strong>Weather App</strong> using{" "}
              <strong>HTML, CSS & JavaScript</strong>.<br />
              Integrated with the <strong>OpenWeatherMap API</strong> to fetch
              real-time weather data based on user input.
              <br />
              Displays temperature, weather condition, humidity, and more in a
              clean UI.
            </p>
            <a
              href="https://your-weather-app-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View Project
            </a>
          </div>

          <div className="project-card">
            <h3>📝 To-Do List Web App</h3>
            <p>
              Developed an interactive <strong>To-Do List</strong> using{" "}
              <strong>HTML, CSS, and JavaScript</strong>.<br />
              Features include task addition, deletion, marking as completed,
              and data persistence with <strong>localStorage</strong>.<br />
              Clean, user-friendly interface with smooth UX interactions.
            </p>
            <a
              href="https://your-todo-app-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View Project
            </a>
          </div>

          <div className="project-card">
            <h3>💱 Currency Converter</h3>
            <p>
              Created a dynamic <strong>Currency Converter</strong> using{" "}
              <strong>HTML, CSS, JavaScript</strong>, and a real-time{" "}
              <strong>Exchange Rates API</strong>.<br />
              Allows users to convert between multiple currencies with live rate
              updates and intuitive UI.
            </p>
            <a
              href="https://your-currency-converter-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View Project
            </a>
          </div>
          <div className="project-card">
            <h3>📋 Attendance Tracker</h3>
            <p>
              Built a simple and effective <strong>Attendance Tracker</strong>{" "}
              using <strong>HTML, CSS, and JavaScript</strong>.<br />
              Allows users to add, update, and remove attendance records with
              real-time table updates and local storage support.
            </p>
            <a
              href="https://your-attendance-tracker-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View Project
            </a>
          </div>
        </div>
      </div>

      <div className="training">
        <h1 className="training-heading">🎓 Trainings & Certifications</h1>
        <ul className="training-list">
          <li>
            <strong>AWS Cloud Foundations & Architecting</strong> – AWS Academy
            Graduate (Sep-Aug 2024)
          </li>
          <li>
            <strong>Web Developement Fundamentals </strong> – IBM SkillsBuild
            (Mar-Apr 2025)
          </li>

          <li>
            <strong>Android Developer Virtual Internship</strong> – Google for
            Developers & AICTE (Sept–Nov 2023)
          </li>
          <li>
            <strong>AWS Cloud Virtual Internship</strong> – AWS Academy
            & AICTE (July–Sept 2024)
          </li>
          <li>
            <strong>Java Technology</strong> – Oracle (Jan 2024)
          </li>
          
          
         
        </ul>

        {/* <h1 className="training-heading">🏆 Achievements</h1>
        <ul className="training-list">
          <li>
            🥇 <strong>Top 50 Finalist</strong>, Smart India Hackathon 2024
            (from 300+ teams)
          </li>
          <li>
            💡 <strong>Solved 100+ LeetCode</strong> DSA problems
          </li>
          <li>
            🚀 <strong>Selected among 2000+ applicants</strong> for Infosys
            Springboard
          </li>
          <li>
            📚 <strong>Member of IEEE</strong> – Actively participating in tech
            events
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Brand;
