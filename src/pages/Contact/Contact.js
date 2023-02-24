import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_08g8dtm",
        "template_2noa06a",
        event.target,
        "vrLRYebfXfNhuRbUN"
      )
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          toast.success("Email sent!", {
            position: toast.POSITION.BOTTOM_CENTER,
            className: "foo-bar",
            theme: "colored",
            autoClose: 1000,
          });
          event.target.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email not sent!", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: "colored",
        });
      });
      
  };

  return (
    <div id="Contact">
      <div className="contact-form">
        <h1 className="contact-title-form">Contact me</h1>
        <form className="form-mail" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required/>

          <label>Email</label>
          <input type="email" name="user_email" required/>

          <label>Message</label>
          <textarea name="user_message" id="" cols="30" rows="10" required></textarea>

          <button>Send</button>
        </form>
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default Contact;
