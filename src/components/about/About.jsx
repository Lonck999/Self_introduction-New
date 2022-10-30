import React from "react";
import "./about.css";
import AboutImg from "../../assets/cat-5.png";
import CV from "../../assets/蕭浩廷.pdf";
import Info from "./info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle"> My introduction</span>

      <div className="container about_container grid">
        <div className="about_me">
          <div className="about_me-image">
            <img className="about_img" src={AboutImg} alt="About_Image" />
          </div>
        </div>

        <div className="about_data">
          <Info />
          <p className="about_description">
            <b>自己的優勢:</b> <br />
            <b>1.有實際接觸過案子的經驗更知道如何團隊合作、溝通。</b> <br />
            <b>2.可自己獨立切版。</b> <br />
            <b>3.會做ＲＷＤ。</b>
          </p>
          <a download="" href={CV} className="button button--flex shadow unit">
            Download CV&nbsp; &nbsp;
            <i class="uil uil-clipboard-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
