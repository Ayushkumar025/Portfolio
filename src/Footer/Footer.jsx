import React from 'react'


const Footer = () => {
  return (
    <>
        <div className="flex justify-center bg-[#f1f1f1] p-4 tracking-widest">
        <p>© 2024 Ayush Kumar</p>
        <div className="flex gap-4 ml-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
