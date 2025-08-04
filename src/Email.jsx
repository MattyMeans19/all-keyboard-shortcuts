import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

//email.js to for users to send requests.
export const Contact = () => {
  const SERVICE_ID = "service_eenr7ii";
  const TEMPLATE_ID = "template_lc7c8sa";
  const PUBLIC_KEY ="0EQDdfVxVkHmWFaFd";


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center p-5"
    >
        <div className="px-4 w-full p-6">
          <h2 className="text-3xl md:text-6xl p-5 mb-8 border-10 rounded-3xl border-double text-center bg-white">
            Don't see an application or operating system you need?
            Feel free to send an email with a request for the specific system you'd like to see added, or just to let us know what you think about this site!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative bg-white">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full border-3"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative bg-white">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full border-3"
                placeholder="Your Email Address (So we can let you know once your request has been added!)"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative bg-white">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full h-full border-3 place-self-center"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="border-5 bg-fuchsia-500 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
};