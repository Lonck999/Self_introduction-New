import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img className="work_img" src={item.image} alt="" />
      <h3 className="work_title">{item.title}</h3>
      <a className="work_button" href={item.demo}>
        Live Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
      <a className="work_button" href={item.github}>
        Code <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
