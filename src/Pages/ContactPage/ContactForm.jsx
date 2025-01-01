import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("Contact_Us_Ollie", "Contact_Us_Ollie", form.current, {
        publicKey: "vYB9ERoSaXAaNuMgO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setMessage("Your message was sent, Thank You.");

    setFormData({
      contactname: "",
      email: "",
      message: "",
    });
  };
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={classes.formContainer} ref={form} onSubmit={sendEmail}>
      <section className={classes.formSection}>
        <label className={classes.inputText} htmlFor="contactname">
          Contact Name:
        </label>
        <input
          className={classes.input}
          type="text"
          id="contactname"
          name="contactname"
          value={formData.contactname}
          onChange={handleChange}
        />
        <div className={classes.formSplit}></div>
      </section>
      <section className={classes.formSection}>
        <label className={classes.inputText} htmlFor="email">
          Email:
        </label>
        <input
          className={classes.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="required"
        />
      </section>
      <section className={classes.formSectionMessage}>
        <label className={classes.inputText} htmlFor="message">
          Message:
        </label>
        <textarea
          className={classes.message}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="required"
        />
      </section>
      <div className={classes.messageRes}>{message}</div>
      <button className={classes.submitBtn} value="Send" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
