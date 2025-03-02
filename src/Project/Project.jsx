import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Responsive E-commerce UI",
    description: "A responsive e-commerce website with modern design and smooth interactions.",
    image: "./images/uber.png",
    codeLink: "#"
  },
  {
    id: 2,
    title: "To-Do List App",
    description: "A task management app with local storage, CRUD operations, and animations.",
    image: "./images/uber.png",
    codeLink: "#"
  },
  {
    id: 3,
    title: "QuickChat App",
    description: "A real-time chat app with Firebase, OpenAI API integration, and user authentication.",
    image: "./images/uber.png",
    codeLink: "#"
  }
];

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
            <div className="flex gap-10 mt-[3%] justify-center flex-wrap">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border w-80 bg-[#f1f1f1] rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      className="w-full object-cover hover:opacity-90 cursor-pointer"
                      alt={project.title}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold  mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-black-300 mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full py-2 bg-[#3B82F6] text-white font-bold rounded-xl hover:bg-[#334155] transition duration-300">
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Element>
      <hr />
    </>
  );
};

export default Project;
