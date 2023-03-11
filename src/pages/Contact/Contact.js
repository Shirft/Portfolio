import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "@ericcote/react-reveal";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    const email = emailjs
      .sendForm(
        "service_08g8dtm",
        "template_2noa06a",
        event.target,
        "vrLRYebfXfNhuRbUN"
      )
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });

    toast.promise(email, {
      pending: {
        render() {
          return "Sending message...";
        },
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "colored",
        autoClose: 1000,
      },
      success: "Email sent!",
      error: "Email not sent!",
    });
  };

  return (
    <div id="Contact">
      <Fade bottom>
      <div className="contact-form">
          <h1 className="contact-title-form">Contact me</h1>
        <form className="form-mail" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email" name="user_email" required />

            <label>Message</label>
            <textarea
              name="user_message"
              id=""
              cols="50"
              rows="10"
              required
            ></textarea>  
            <button>Send</button>
        </form>
      </div>
      </Fade>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default Contact;
