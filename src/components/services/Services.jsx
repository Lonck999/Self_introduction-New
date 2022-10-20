import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offter</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="services">
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="services">
          <div className="services_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
