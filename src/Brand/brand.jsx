import React from "react";
import "./brand.css";

function Brand(props) {
  const handleReadClick = () => {
    alert("page is under construction");
  };

  return (
    <div className="brand-Story">
      <div className="brand-story premium">
        <p className="brand-eyebrow">HEY 👋</p>

        <h1 className="brand-heading">
          My work is a reflection of my
          <span className="highlight"> commitment </span>
          to my clients.
        </h1>

        <button
          className="brand-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Scroll to top</span>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>

      <div className="slider-wrapper">
        <div className="slider-track">
          {[
            {
              name: "Jungle Safari",
              link: "https://jungle-safari-tzw3.vercel.app/",
              img: props.image5,
            },
            {
              name: "Bing Box",
              link: "https://ritikvishwakarma75.github.io/project---Movie/",
              img: props.image1,
            },
            {
              name: "E-Commerce Web UI",
              link: "https://ritikvishwakarma75.github.io/web-UI/",
              img: props.image2,
            },
            {
              name: "Weather Web",
              link: "https://ritikvishwakarma75.github.io/Weather-web/",
              img: props.image3,
            },
          ]
            .concat([
              {
                name: "Bing Box",
                link: "https://ritikvishwakarma75.github.io/project---Movie/",
                img: props.image1,
              },
              {
                name: "E-Commerce Web UI",
                link: "https://ritikvishwakarma75.github.io/web-UI/",
                img: props.image2,
              },
              {
                name: "Weather Web",
                link: "https://ritikvishwakarma75.github.io/Weather-web/",
                img: props.image3,
              },
            ])
            .map((project, index) => (
              <div className="slide premium" key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.img} alt={project.name} />
                </a>
                <p className="p-name">{project.name}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="about premium-about">
        <div className="about-text reveal-left">
          <h1 className="about-title">About Me</h1>

          <ul className="about-list">
            <li>
              👩‍🎓 <strong>B.Tech in Computer Science & Engineering</strong> at
              Galgotias University (2022–2026) | CGPA: 7.42
            </li>

            <li>
              💻 Passionate about <strong>Full-Stack Development</strong>,{" "}
              <strong>Artificial Intelligence</strong>, and{" "}
              <strong>building real-world projects</strong>
            </li>

            <li>
              🌱 Currently sharpening skills in <strong>Java</strong>,{" "}
              <strong>DSA</strong>, and <strong>Databases</strong>
            </li>

            <li>
              🎥 <strong>Built a responsive movie trailer platform</strong> &{" "}
              <strong>an Amazon-inspired e-commerce UI 🛒</strong>
            </li>

            <li>
              📈 Solved <strong>DSA problems</strong> on{" "}
              <a
                href="https://leetcode.com/u/ritikvishwakarma75/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
            </li>

            <li>
              📫{" "}
              <a href="mailto:ritikvishwakarma.mailbox@gmail.com">
                ritikvishwakarma.mailbox@gmail.com
              </a>
            </li>

            <li>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/ritik-vishwakarma-294282299"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="about-image reveal-right">
          <div className="img premium-img">
            <img src={props.image} alt="About Me" />
          </div>
        </div>
      </div>

      <div className="service premium-service">
        <h2 className="service-heading">🛠️ Skills & Technologies</h2>

        <div className="service-cards">
          <div className="skill-card premium-card reveal">
            <h3>💻 Languages & Databases</h3>
            <ul className="skill-list">
              <li>Java</li>
              <li>MySQL</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-card premium-card reveal delay">
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

          <div className="skill-card premium-card reveal delay-2">
            <h3>🧰 Tools & Frameworks</h3>
            <ul className="skill-list">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>IntelliJ IDEA</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects premium-projects">
        <h2 className="projects-heading">💼 Projects</h2>

        <div className="projects-grid">
          <div className="project-card premium reveal">
            <h3>🎥 BingBox – Movie Trailer UI</h3>
            <p>
              Developed a dynamic trailer browsing platform using{" "}
              <strong>React</strong>.
              <br />
              Implemented trailer playback, smooth animations, and responsive
              UI.
            </p>
            <a
              href="https://ritikvishwakarma75.github.io/project---Movie/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          <div className="project-card premium reveal delay">
            <h3>🛍️ E-Commerce UI with Add-to-Cart</h3>
            <p>
              Built a responsive <strong>E-Commerce UI</strong> using
              <strong> HTML, CSS & JavaScript</strong>.
              <br />
              Includes product listing and cart logic.
            </p>
            <a
              href="https://ritikvishwakarma75.github.io/web-UI/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          <div className="project-card premium reveal delay-2">
            <h3>🌦️ Weather App (API)</h3>
            <p>
              Weather app using <strong>OpenWeatherMap API</strong>.
              <br />
              Displays real-time weather, humidity, and conditions.
            </p>
            <a
              href="https://ritikvishwakarma75.github.io/Weather-web/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          <div className="project-card premium reveal">
            <h3>📝 To-Do List Web App</h3>
            <p>
              Interactive <strong>To-Do List</strong> with
              <strong> localStorage</strong>.
              <br />
              Add, delete, and complete tasks smoothly.
            </p>
            <a
              href="https://ritikvishwakarma75.github.io/To-Do-List/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          <div className="project-card premium reveal delay">
            <h3>💱 Currency Converter</h3>
            <p>
              Real-time <strong>Currency Converter</strong> using
              <strong> Exchange Rates API</strong>.
              <br />
              Clean UI with live updates.
            </p>
            <span className="coming-soon">Coming Soon</span>
          </div>

          <div className="project-card premium reveal delay-2">
            <h3>📋 Attendance Tracker</h3>
            <p>
              Attendance management tool using
              <strong> HTML, CSS & JavaScript</strong>.
              <br />
              Dynamic table updates with local storage.
            </p>
            <a
              href="https://ritikvishwakarma75.github.io/Attendance_Tracker/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>

      <div className="training premium-training">
        <h2 className="training-heading">🎓 Trainings & Certifications</h2>

        <ul className="training-timeline">
          <li className="training-item reveal">
            <span className="dot"></span>
            <div className="content">
              <h3>AWS Cloud Foundations & Architecting</h3>
              <p>AWS Academy Graduate · Sep–Aug 2024</p>
            </div>
          </li>

          <li className="training-item reveal delay">
            <span className="dot"></span>
            <div className="content">
              <h3>Web Development Fundamentals</h3>
              <p>IBM SkillsBuild · Mar–Apr 2025</p>
            </div>
          </li>

          <li className="training-item reveal delay-2">
            <span className="dot"></span>
            <div className="content">
              <h3>Android Developer Virtual Internship</h3>
              <p>Google for Developers & AICTE · Sept–Nov 2023</p>
            </div>
          </li>

          <li className="training-item reveal">
            <span className="dot"></span>
            <div className="content">
              <h3>AWS Cloud Virtual Internship</h3>
              <p>AWS Academy & AICTE · July–Sept 2024</p>
            </div>
          </li>

          <li className="training-item reveal delay">
            <span className="dot"></span>
            <div className="content">
              <h3>Java Technology</h3>
              <p>Oracle · Jan 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brand;
