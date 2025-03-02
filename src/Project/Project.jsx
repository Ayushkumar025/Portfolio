import React from 'react'
import {  Element } from "react-scroll";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <>
        <Element name="project">
        <motion.div
          initial={{ opacity: 0, y: 110 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
        >
          <div className="projects mt-[3%] mb-[3%]">
            <div className="flex justify-center">
              <h1 className="projects-1 text-xl">Some of my Recent Projects</h1>
            </div>
            <div className="flex gap-10 mt-[3%] justify-center">
  <div className="border w-80 bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <div className="overflow-hidden rounded-t-2xl">
      <img
        src="./images/laptop.png"
        className="w-full object-cover hover:opacity-90 cursor-pointer"
        alt="Laptop"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-2">Recent Project</h3>
      <p className="text-sm text-gray-300 mb-4">
        Some of my recent projects showcasing responsive design, interactive features, and sleek UI/UX.
      </p>
      <button
        className="w-full py-2 bg-[#475569] text-white font-bold rounded-xl hover:bg-[#334155] transition duration-300"
      >
        View Code
      </button>
    </div>
  </div>

  <div className="border w-80 bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <div className="overflow-hidden rounded-t-2xl">
      <img
        src="./images/laptop.png"
        className="w-full object-cover hover:opacity-90 cursor-pointer"
        alt="Laptop"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-2">Recent Project</h3>
      <p className="text-sm text-gray-300 mb-4">
        Some of my recent projects showcasing responsive design, interactive features, and sleek UI/UX.
      </p>
      <button
        className="w-full py-2 bg-[#475569] text-white font-bold rounded-xl hover:bg-[#334155] transition duration-300"
      >
        View Code
      </button>
    </div>
  </div>

  <div className="border w-80 bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <div className="overflow-hidden rounded-t-2xl">
      <img
        src="./images/laptop.png"
        className="w-full object-cover hover:opacity-90 cursor-pointer"
        alt="Laptop"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-2">Recent Project</h3>
      <p className="text-sm text-gray-300 mb-4">
        Some of my recent projects showcasing responsive design, interactive features, and sleek UI/UX.
      </p>
      <button
        className="w-full py-2 bg-[#475569] text-white font-bold rounded-xl hover:bg-[#334155] transition duration-300"
      >
        View Code
      </button>
    </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Element>
      <hr />

    </>
  )
}

export default Project
