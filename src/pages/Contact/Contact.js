import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "@ericcote/react-reveal";
import { Link } from "react-router-dom";

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
      <div className="contact-form">
        <Fade right>
          <h1 className="contact-title-form">Contact me</h1>
        </Fade>
        <Fade left>
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
            <button>Send Message</button>
          </form>
        </Fade>
      </div>

      <ToastContainer autoClose={1500} />
      <div className="home-footer">
          <div className="home-footer-redes">
            <Link
              to="https://www.linkedin.com/in/miguel-hilser-39b106122"
              target="_blank"
              title="Linkdin"
            >
              <img alt="linkdin" src="./images/linkedin.png" />
            </Link>
            <Link
              to="https://github.com/Shirft"
              target="_blank"
              title="Git-hub"
            >
              <img alt="Git-hub" src="./images/github.png" />
            </Link>
            <Link
              to="https://wa.me/1132933986"
              target="_blank"
              title="Whatsapp"
            >
              <img alt="whatsapp" src="./images/whatsapp.png" />
            </Link>
            <Link
              to="https://t.me/MiguelHilser"
              target="_blank"
              title="Telegram"
            >
              <img alt="Telegram" src="./images/telegrama.png" />
            </Link>
          </div>
          <div className="home-footer-text">
            <Link to="https://github.com/Shirft/Portfolio" target="_blank">
              <p>Made by Miguel Hilser</p>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Contact;
