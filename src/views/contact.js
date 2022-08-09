import React from "react";

import ContactForm from "../components/contact/contact.form";

export default function ContactMe() {
  return (
    <div id="my-contact" className="container text-center my-5">
      <div id="contact-container">
        <h1 id="contact" className={"mb-5 wow fadeInLeft"}>
          Contact
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
