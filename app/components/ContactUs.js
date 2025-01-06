import React from "react";
import styles from "../styles/Contact.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h1 className="contact-heading">Get In Touch</h1>
          <p className="sub-heading">We'd love t hear from you! Reach out today.</p>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.field}>
            <label>Name</label>
            <input placeholder="Enter your name" />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input placeholder="Enter your email" />
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea placeholder="Type your message"></textarea>
          </div>
          <div className={styles.checkField}>
            <input type="checkbox" id="check-input" />{" "}
            <label>I accept the terms</label>
          </div>
          <div>
            <button className={styles.button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
