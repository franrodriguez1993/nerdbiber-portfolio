import React, { useEffect, useState } from "react";
import "../css/ContactRoute/ContactRoute.css";
import MailIcon from "../svg/mail.svg";
import fiverrIcon from "../svg/fiverr.svg";
import ContactCard from "../components/ContactRoute/ContactCard";
import contactJson from "../json/contact.json";

const ContactRoute = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    setContact(contactJson.devs);
  }, []);

  return (
    <div className="route-container">
      <div className="contactroute-title_container">
        <h1 className="contactroute-title">Contact us</h1>
      </div>
      <section className="ct-top">
        <article className="ct-contact-card">
          <div className="ct-contact-card-img_container">
            <img src={MailIcon} className="ct-contact-card-img" alt="mail" />
          </div>
          <div className="ct-contact-card-text_container">
            <a
              className="ct-contact-card-text"
              href="mailto:NerdBiber@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              NerdBiber@gmail.com
            </a>
          </div>
        </article>
        <article className="ct-contact-card">
          <div className="ct-contact-card-img_container">
            <img src={fiverrIcon} className="ct-contact-card-img" alt="fiver" />
          </div>
          <div className="ct-contact-card-text_container">
            <a
              className="ct-contact-card-text"
              href="https://www.fiverr.com/nerdbiber"
              target="_blank"
              rel="noreferrer"
            >
              fiverr.com/nerdbiber
            </a>
          </div>
        </article>
      </section>
      <h2 className="contactroute-subtitle">Developers</h2>
      <section className="ct-bottom">
        {contact.length !== 0 &&
          contact.map((d) => <ContactCard persona={d} key={d.id} />)}
      </section>
    </div>
  );
};

export default ContactRoute;
