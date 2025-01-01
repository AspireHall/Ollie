import ContactForm from "./ContactForm";
import classes from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.header}>
          <h1 className={classes.title}>Question? Get in Touch!</h1>
          <p className={classes.text}>
            Help us improve our services by sending us a message on what
            features or improvements we can make. Make a request for invitation
            codes or ask us any question you may have.
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
