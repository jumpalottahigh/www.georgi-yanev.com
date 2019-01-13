import React from 'react'

const linkList = [
  'https://gyanev.com/cv',
  'https://gyanev.com/resume',
  'https://gyanev.com/uses',
  'https://gyanev.com/about',
  'https://gyanev.com/blog',
]

const Links = () => (
  <div>
    Links:
    {linkList.map((link, index) => (
      <div key={index}>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
    ))}
  </div>
)

export default Links
