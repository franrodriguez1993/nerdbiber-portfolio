import React from "react";
import linkidinIcon from "../../svg/linkedin.svg";
import GithubIcon from "../../svg/github.svg";

const ContactCard = ({ persona }) => {
  return (
    <div className="contactcard-container">
      <p>{persona.name}</p>
      <p>{persona.nationality}</p>
      <p>{persona.speciality}</p>
      <a href={persona.github} target="_blank">
        <img src={GithubIcon} className="contactcard-button_github" />
      </a>
      <a href={persona.linkedin} target="_blank">
        <img src={linkidinIcon} className="contactcard-button_linkedin" />
      </a>
    </div>
  );
};

export default ContactCard;
