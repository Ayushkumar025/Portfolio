import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center bg-[#f1f1f1] p-4 tracking-widest">
        <p>© 2024 Ayush Kumar</p>
        <div className="flex gap-4 mt-2 sm:mt-0 sm:ml-4">
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
