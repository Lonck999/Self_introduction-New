import React from "react";

const info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">0~1 Years</span>
      </div>

      <div className="about_box">
        <i class="bx bx-user"></i>
        <h3 className="about_title">Team</h3>
        <span className="about_subtitle">3~5 Member</span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt"></i>
        <h3 className="about_title">Porjects</h3>
        <span className="about_subtitle">10+ Completed</span>
      </div>
    </div>
  );
};

export default info;
