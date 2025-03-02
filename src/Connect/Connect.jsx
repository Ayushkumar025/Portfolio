import React from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Element } from 'react-scroll';

const Connect = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7v2qo1r",
        "template_iijhinl",
        formData,
        "ZBqoi0g-goT7OmdME"
      )
      .then(
        (response) => {
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({ name: "", email: "", budget: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <Element name="connect">
        <motion.div
          initial={{ opacity: 0, y: 110 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
        >
          <div className="hire mt-[3%] ml-[8%] mr-[8%]">    
            <div className="flex justify-between items-center h-screen p-4">
              <div className="text-left max-w-md">
                <h1 className="text-3xl font-bold mb-4">
                  Have projects in mind? Let’s work <span className="text-[#3B82F6]">together</span>
                </h1>
                <p className="text-black-300 mb-6">
                  Have a project in mind? Looking to partner or work together? Reach out through the form and I’ll get back to you in the next 48 hours.
                </p>
                <p className="text-black-300 mb-2">📧 beingliving0@gmail.com</p>
                <p className="text-black-300">📞 +91 8077147124</p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-[#f1f1f1] bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md"
              >
                <h2 className="text-center text-2xl mb-6">Fill the form below*</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your mail"
                    className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Your budget"
                    className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Type your message"
                    className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#3B82F6] text-white font-bold rounded-lg hover:opacity-90 transition duration-300 shadow-lg"
                >
                  Submit Now →
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </motion.div>
      </Element>
      <hr />
    </>
  );
}

export default Connect;
