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
        <div className="ct-top_mail">
          <img src={MailIcon} className="ct-top_mail-img" />
          <p className="ct-top_mail-text">NerdBiber@gmail.com</p>
        </div>
        <div className="ct-top_fiverr">
          <img src={fiverrIcon} className="ct-top_fiverr-img" />
          <p className="ct-top_fiverr-text">Fiverr.com/nerdbiber</p>
        </div>
      </section>
      <section className="ct-bottom">
        {contact.length !== 0 &&
          contact.map((d) => <ContactCard persona={d} key={d.id} />)}
      </section>
    </div>
  );
};

export default ContactRoute;
