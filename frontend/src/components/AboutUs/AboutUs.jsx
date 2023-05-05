import PropTypes from "prop-types";
import React, { useState } from "react";
import "./AboutUs.scss";
import { FaLinkedin } from "react-icons/fa";

function AboutUs({ imageSrc, name, description, linkedin }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isHovered ? "members-containerHovered" : "members-container"}
    >
      <img src={imageSrc} alt="imageTeam" className="imageMembers" />

      <h3 className="nameMembers">{name}</h3>
      <h3 className="descriptionMembers">{description}</h3>
      <a
        href={linkedin}
        className="linkedinMembers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

AboutUs.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default AboutUs;
