import React from "react";
import "./Bubble.scss";

const Bubble = (props) => {
  return (
    <div
      className={`bubble ${props.className} ${props.isHovered === props.id}`}
      onClick={() =>
        props.isHovered === props.id
          ? props.setIsHovered(null)
          : props.setIsHovered(props.id)
      }
    >
      <div className="bubble__content">
        <h1>{props.title}</h1>
        <div className="bubble__content__text">{props.content}</div>
      </div>
      <img src={props.image} alt="bubble_image" className="bubble__image" />
    </div>
  );
};

export default Bubble;
