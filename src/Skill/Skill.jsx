import React from 'react'
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <>
        <Element name="skills">
        <motion.div
          initial={{ opacity: 0, y: 110 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
        >
          <div className="skills mt-[3%] mb-[3%]">
            <div className="flex justify-center">
              <h1 className="skills-1 text-xl">Skills</h1>
            </div>
            <div className="flex gap-10 mt-[3%] justify-center">
              <div className="border w-80 bg-gradient-to-br from-[#3B82F6] to-[#ffffff] rounded-lg shadow-lg p-[10px]">
                <h2 className="text-center font-bold">Frontend</h2>
                <ul className="list-disc list-inside">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="border w-80 bg-gradient-to-br from-[#0A2333] to-[#ffffff] rounded-lg shadow-lg p-[10px]">
                <h2 className="text-center font-bold">Backend</h2>
                <ul className="list-disc list-inside">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="border w-80 bg-gradient-to-br from-[#3B82F6] to-[#ffffff] rounded-lg shadow-lg p-[10px]">
                <h2 className="text-center font-bold">Tools</h2>
                <ul className="list-disc list-inside">
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </Element>
      <hr />
    </>
  )
}

export default Skill
