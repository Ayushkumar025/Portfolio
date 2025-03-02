
import "./About.css";
import { MdOutlineMail } from "react-icons/md";
import ProgressBar from "react-scroll-progress-bar";



function About() {

  return (
    <div className="tracking-widest">
      <ProgressBar bgcolor="#3B82F6" duration="1" />
      <div className="first flex bg-[#f1f1f1] p-[5px] justify-between sticky left-0 right-0 top-0 z-50">
        <div className="second flex ">
          <img
            src="./images/logoo.jpg"
            className="third object-contain h-10 w-auto"
            alt="logo"
          />
          <ul className="flex items-center gap-5 ">
            <li className="hover:underline hover:cursor-pointer hover:text-[#3B82F6]">
            <a href="./images/ayush-01.pdf" target="blank">RESUME</a>
              
            </li>
            <li className="hover:underline hover:cursor-pointer hover:text-[#3B82F6]">
              PROJECTS
            </li>
            <li className="hover:underline hover:cursor-pointer hover:text-[#3B82F6]">
              CONTACT US
            </li>
            <li className="hover:underline hover:cursor-pointer hover:text-[#3B82F6]">
              HIRE ME
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1 ">
          <MdOutlineMail />
          <span className="hover:underline hover:cursor-pointer hover:text-[#3B82F6]">
            ayushkumar0117@gmail.com
          </span>
        </div>
      </div>

      <div className="h-[100vh]">
        <div className="flex justify-around">
          <div className="mt-[15%] text-xl">
            <div className="wrapper">
              <div className="typing-demo pb-[20px]">
                Hi, <span className="text-[#3B82F6]">Ayush Kumar</span> This
                Side
              </div>
            </div>
            <div className="wrapper-ii">
              <div className="typing-demo-ii pb-[20px]">
                And I'm a Full Stack Developer.
              </div>
            </div>
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <u>Click Me</u>
            </button>
            <dialog id="my_modal_3" className="modal w-[50%] rounded-xl">
              <div className="modal-box p-[20px]">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className=" text-lg tracking-widest">
                  Hello, I’m Ayush Kumar! 👋
                </h3>
                <p className="py-4 tracking-widest">
                  I’m a passionate Full Stack Developer Trainee at Skillyards
                  Versatility Pvt. Ltd., where I’m constantly learning and
                  building innovative projects. I hold a B.Tech in Computer
                  Science and Engineering from Dr. A.P.J. Abdul Kalam Technical
                  University and completed my schooling at Simpkins School (CBSE
                  Board). My technical toolkit includes HTML, CSS, JavaScript,
                  React, Node.js, Express.js, MongoDB Atlas, and Mongoose,
                  alongside styling with Tailwind CSS and performance
                  optimization with Vite. I’ve worked on exciting projects like
                  a responsive E-commerce UI, a To-Do List app with local
                  storage and animations, and QuickChat — a chat app featuring
                  OpenAI API integration and Firebase authentication. I’m
                  passionate about deepening my understanding of web
                  development, from mastering async/await in JavaScript to
                  preparing to teach DSA concepts. Beyond coding, I’ve
                  participated in debates on AI regulation and am even planning
                  to shoot a testimonial video sharing my growth at Skillyards.
                  I’m excited to keep learning, building, and connecting with
                  like-minded developers. Let’s create something amazing
                  together! 
                </p>
              </div>
            </dialog>
          </div>
          <div className="">
            <img
              src="./images/IMG-0.png"
              className="rounded-full"
              alt="profile"
            />
          </div>
        </div>
      </div>
      <hr />

      
      

      
      

      
    </div>
  );
}

export default About;
