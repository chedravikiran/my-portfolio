import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("form submitted", formData);

      await emailjs.send(
        "service_jaf42d9",
        "template_gymleuj",
        {
          from_name: formData.name,
          to_name: "ravikiran",
          from_email: formData.email,
          to_email: "chederavi44@gmail.com",
          message: formData.message,
        },
        'Zz5Cxo9H9bsDwWTjb'
      );

      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
      setAlertType("success");
      setAlertMessage("Your message has been sent.");
      setShowAlert(true);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setAlertType("failed");
      setAlertMessage("Your message could not be sent.");
      setShowAlert(true);
    }
  };

  // Auto-dismiss alert after 4 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <section className="relative flex items-center section-spacing">
      
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-y/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's have a talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="Your good name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="yourname@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="field-input field-input-focus"
              placeholder="Leave your message here"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
