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

  p,
  ul li {
    max-width: 64ch;
    margin: 1rem auto;
  }
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
