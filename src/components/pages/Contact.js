import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Navigationbar from "../Navigationbar";

const Contact = () => {
  const SERVICE_ID = "**************";
  const TEMPLATE_ID = "*******";
  const USER_ID = "****************";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="bg-[aliceblue] h-[100vh] flex justify-center items-center">
      <Navigationbar />
      <form onSubmit={handleOnSubmit} className="mx-20 w-96">
        <h2 className="text-center">Contact Us</h2>
        <div className="input-feild">
          <label>
            Email <span>*</span>-
          </label>
          <input
            id="form-input-control-email"
            type="email"
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
        </div>
        <div className="input-feild">
          <label>
            Name <span>*</span>-
          </label>
          <input
            id="form-input-control-last-name"
            type="text"
            label="Name"
            name="user_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />
        </div>
        <div className="input-feild">
          <label>
            Message <span>*</span>-
          </label>
          <textarea
            id="form-textarea-control-opinion"
            type="textarea"
            label="Message"
            name="user_message"
            placeholder="Message…"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-3 text-black border-2 cursor-pointer border-black px-3 py-1 mx-auto bg-[#8aeed8d0]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
