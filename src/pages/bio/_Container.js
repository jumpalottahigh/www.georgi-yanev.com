import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  h2,
  h3 {
    color: #0275d8;
    text-align: center;
  }

  h2 {
    margin-top: 3rem;
  }

  p {
    max-width: 64ch;
    margin: 1rem auto;
    padding: 0.2rem 1rem;
  }

  ul li {
    max-width: 64ch;
    padding: 0.2rem 1rem;
    margin: 0 auto;
  }

  li > p {
    display: inline-block;
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-position: inside;
  }

  @media (min-width: 600px) {
    ul li {
      margin: 0 auto;
    }
  }
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
