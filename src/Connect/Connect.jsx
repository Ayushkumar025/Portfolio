import React from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Element } from 'react-scroll'; // Import Element from react-scroll
const Connect = () => {

     // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_7v2qo1r", // Replace with your Service ID
        "template_iijhinl", // Replace with your Template ID
        formData,
        "ZBqoi0g-goT7OmdME" // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          //alert("Thank you for reaching out! I will get back to you soon.");
          setFormData({ name: "", email: "", message: "" }); // Reset the form
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
          <div className="hire mt-[3%]">
            <div className="flex justify-center">
              <h1 className="hire-1 text-xl">Connect with Me</h1>
            </div>
            <div className="flex justify-center items-center h-screen p-4">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md"
              >
                <h2 className="text-center text-2xl font-bold text-white mb-6">
                  Contact Us
                </h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg"
                >
                  Send
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </motion.div>
      </Element>
      <hr />
    </>
  )
}

export default Connect
