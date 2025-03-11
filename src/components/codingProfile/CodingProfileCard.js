import React from "react";
import "./CodingProfileCard.scss";

export default function CodingProfileCard({ profile, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(profile.url, profile.platform)}>
      <div className={isDark ? "coding-profile-container dark-mode" : "coding-profile-container"}>
        <div className="coding-profile-card">
          <img src={profile.logo} alt={profile.platform} className="profile-logo" />
          <h3 className="platform-title">{profile.platform}</h3>
          
          <div className="profile-info">
            <p className="profile-title">
              <strong>Title:</strong> {profile.title || "N/A"}
            </p>
            <p className="profile-rating">
              <strong>Rating:</strong> {profile.rating || "N/A"}
            </p>
            <p className="profile-solved">
              <strong>Problems Solved:</strong> {profile.solved || "N/A"}
            </p>
          </div>

          <p className="profile-link">View Profile →</p>
        </div>
      </div>
    </div>
  );
}
