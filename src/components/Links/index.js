import React from 'react'
import styled from 'styled-components'
import H2 from '../elements/H2/H2'

const linkList = [
  { url: 'https://gyanev.com/cv', description: 'CV' },
  { url: 'https://gyanev.com/resume', description: 'Resume' },
  {
    url: 'https://gyanev.com/uses',
    description: 'Code editor, terminal, plugins, settings, themes',
  },
  {
    url: 'https://gyanev.com/about',
    description:
      'Projects, Skills, Certificates, Hobbies all in one looong page',
  },
  { url: 'https://gyanev.com/blog', description: 'My blog' },
  { url: 'https://gyanev.com/dot', description: 'Dotfiles' },
  { url: 'https://gyanev.com/npm', description: 'My first NPM package' },
  { url: 'https://gyanev.com/github', description: 'GitHub profile' },
  { url: 'https://gyanev.com/twitter', description: 'Twitter profile' },
  { url: 'https://gyanev.com/linkedin', description: 'LinkedIn profile' },
  { url: 'https://gyanev.com/twitch', description: 'Twitch profile' },
  {
    url: 'https://gyanev.com/jamstack',
    description: 'JAMstack with Gatsby and Netlify talk',
  },
  {
    url: 'https://gyanev.com/georgi-codes',
    description: 'My YouTube coding channel',
  },
  {
    url: 'https://gyanev.com/georgi-fpv',
    description: 'My YouTube FPV channel',
  },
  { url: 'https://gyanev.com/references', description: 'References' },
]

const LinkContainer = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 2rem;
  }

  .inner {
    display: grid;
    gap: 10px;
    max-width: 80ch;
    margin: 0 auto;
  }
`

const Links = () => (
  <LinkContainer>
    <H2>Short Links:</H2>
    <div className="inner">
      {linkList.map((link, index) => (
        <div key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.url}
          </a>
          <p>{link.description}</p>
        </div>
      ))}
    </div>
  </LinkContainer>
)

export default Links
