import React from "react";
import linkidinIcon from "../../svg/linkedin.svg";
import GithubIcon from "../../svg/github.svg";

const ContactCard = ({ persona }) => {
  return (
    <div className="contactcard">
      <p className="contactcard-name">{persona.name}</p>
      <p>{persona.nationality}</p>
      <p className="contactcard-speciality">{persona.speciality}</p>
      <div className="contactcard-container_icon">
        <a href={persona.github} target="_blank" rel="noreferrer">
          <img src={GithubIcon} className="contactcard-icons" alt="github" />
        </a>
        <a href={persona.linkedin} target="_blank" rel="noreferrer">
          <img
            src={linkidinIcon}
            className="contactcard-icons"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
