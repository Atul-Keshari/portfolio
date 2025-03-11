import React, { useContext } from "react";
import "./Achievement.scss";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { FaTrophy, FaLaptopCode, FaLightbulb } from "react-icons/fa";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  // Achievements Data (No long descriptions or images)
  const achievements = [
    {
      icon: <FaLightbulb className="achievement-icon" />,
      title: "Smart India Hackathon (SIH)",
      description: "Finalist in the Smart India Hackathon.",
    },
    {
      icon: <FaLaptopCode className="achievement-icon" />,
      title: "ICPC Regionalist 2024",
      description: "Secured 60th rank in India at ICPC Regionals.",
    },
    {
      icon: <FaTrophy className="achievement-icon" />,
      title: "LeetCode BW Contest'133",
      description: "Secured 38th global rank among 35k+ participants.",
    },
    {
      icon: <FaTrophy className="achievement-icon" />,
      title: "CodeChef Starter-172",
      description: "Achieved a global rank of 16th in Div 2",
    },
    {
      icon: <FaTrophy className="achievement-icon" />,
      title: "CodeChef Starter-156",
      description: "Achieved a global rank of 24th in Div 2",
    },
    {
      icon: <FaLightbulb className="achievement-icon" />,
      title: "BlackBox Team Event",
      description: "1st position among 400+ teams from pan India.",
    },
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className={isDark ? "dark-mode heading" : "heading"}>
              {achievementSection.title || "Achievements & Milestones"}
            </h1>
          </div>

          <div className="achievement-list">
            {achievements.map((achievement, index) => (
              <div key={index} className={isDark ? "achievement-item dark-mode" : "achievement-item"}>
                {achievement.icon}
                <div className="achievement-text">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
