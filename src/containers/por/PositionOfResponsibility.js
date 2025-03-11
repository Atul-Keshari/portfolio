import React, { useContext } from "react";
import "./PositionOfResponsibility.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { MdWorkOutline } from "react-icons/md";

const positions = [
  {
    title: "Placement Coordinator",
    duration: "June 2024 – July 2025",
    responsibilities: [
      "Facilitating communication between recruiters and students.",
      "Organizing placement drives and mock interviews.",
      "Guiding students through the recruitment process."
    ],
    skills: ["Communication", "Leadership", "Event Management", "Networking"]
  },
  {
    title: "Shiksha Welfare Society, Indore",
    duration: "Jan 2020 – Present",
    responsibilities: [
      "Taught underprivileged students core subjects and digital skills.",
      "Organized awareness drives and fundraising events.",
      "Helped the NGO expand outreach and operations."
    ],
    skills: ["Teaching", "Event Management", "Community Engagement", "Strategic Growth"]
  },
  {
    title: "Vice President, Startup Cell",
    duration: "May 2024 – Present",
    responsibilities: [
      "Leading initiatives to promote entrepreneurship on campus.",
      "Organizing workshops and mentorship programs.",
      "Collaborating with startups and industry leaders."
    ],
    skills: ["Leadership", "Strategic Planning", "Public Speaking", "Collaboration"]
  }
];

export default function PositionOfResponsibility() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="position-of-responsibility">
        <div className="por-main-div">
          <div className="por-header">
            <h1 className={isDark ? "dark-mode heading" : "heading"}>Position of Responsibility</h1>
            <p className={isDark ? "dark-mode subTitle" : "subTitle"}>Roles I have undertaken and skills I developed.</p>
          </div>
          <div className="por-list">
            {positions.map((position, i) => (
              <div key={i} className={isDark ? "dark-mode por-item" : "por-item"}>
                <MdWorkOutline className="por-icon" />
                <div className="por-text">
                  <h3>{position.title}</h3>
                  <p className="por-duration">{position.duration}</p>
                  <ul className="por-responsibilities">
                    {position.responsibilities.map((task, j) => (
                      <li key={j}>{task}</li>
                    ))}
                  </ul>
                  <p className="por-skills"><strong>Skills:</strong> {position.skills.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
