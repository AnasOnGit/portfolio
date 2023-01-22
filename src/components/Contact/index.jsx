import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    form.current.submit_btn.classList.toggle("disabled-color");
    form.current.submit_btn.disabled = true;
    if (
      form.current.from_name.value === "" ||
      form.current.from_email.value === "" ||
      form.current.message.value === ""
    ) {
      setOpen(true);
      setMessage("Name, email, and message fields are required!");
    } else {
      setOpen(true);
      setMessage("Sending...");
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            // show the user a success message
            setMessage("Your message was delivered successfully!");
            setOpen(true);
            form.current.from_name.value = "";
            form.current.from_email.value = "";
            form.current.from_phone_number.value = "";
            form.current.message.value = "";
            // console.log(result);
          },
          (error) => {
            setMessage("Oops, your message could not be sent.");
            setOpen(true);
            console.log(error);
            // show the user an error
          }
        );
    }
    form.current.submit_btn.classList.toggle("disabled-color");
    form.current.submit_btn.disabled = false;
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <div className="section-title">Contact Me</div> */}
      <div className="form-input-container">
        <label htmlFor="from_name">Name</label>
        <input
          required
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Mohammed ..."
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="from_email">Email</label>
        <input
          required
          type="email"
          id="from_email"
          name="from_email"
          placeholder="youremail@email.com"
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="from_phone_number">Phone number</label>
        <input
          type="number"
          id="from_phone_number"
          name="from_phone_number"
          placeholder="000000000"
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="message">Message</label>
        <textarea
          required
          placeholder="Your message here..."
          name="message"
          id="message"
        ></textarea>
      </div>
      <input type="submit" name="submit_btn" value="SEND MESSAGE" />
      <div
        className={`message-container ${open ? "open" : ""}`}
        onDoubleClick={() => setOpen(false)}
      >
        <div className="message">
          <div
            className="close-btn clickable-div"
            onClick={() => setOpen(false)}
          >
            +
          </div>
          {message}
        </div>
      </div>
    </form>
  );
}
