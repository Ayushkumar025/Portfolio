import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      skills: [
        { name: 'JavaScript', img: './images/javascript.png' },
        { name: 'React', img: './images/react.png' },
        { name: 'Redux', img: './images/redux.png' },
        { name: 'HTML5', img: './images/html.png' },
        { name: 'CSS3', img: './images/css3.png' },
        { name: 'Tailwind CSS', img: './images/tailwind.png' },
      ],
    },
    {
      title: 'Back-end',
      skills: [
        { name: 'MongoDB', img: './images/mongodb.png' },
        { name: 'Node', img: './images/nodejs.png' },
        { name: 'Express', img: './images/express.png' },
        { name: 'Python', img: './images/python.jpeg' },
        { name: 'Firebase', img: './images/firebase.png' },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'Git', img: './images/git.png' },
        { name: 'GitHub', img: './images/github.png' },
        // { name: 'Adobe XD', img: './images/adobe-xd.png' },
        // { name: 'Photoshop', img: './images/photoshop.png' },
        // { name: 'Linux', img: './images/linux.png' },
        // { name: 'Jest', img: './images/jest.png' },
      ],
    },
  ];

  return (
    <Element name="skills">
      <motion.div
        initial={{ opacity: 0, y: 110 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <div className="skills-section mt-10 mb-10 px-4 sm:px-0">
          <h1 className="text-2xl text-center mb-6">SKILLS</h1>
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl mb-4 text-center">{category.title}</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="border w-full sm:w-40 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="overflow-hidden rounded-t-2xl p-4">
                      <img
                        src={skill.img}
                        className="w-full h-20 object-contain"
                        alt={skill.name}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-md font-semibold  text-center">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr/>
      </motion.div>
    </Element>
    
  );
};

export default Skills;
