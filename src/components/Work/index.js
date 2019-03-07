import React from 'react'
import styled from 'styled-components'
import H2 from '../elements/H2/H2'

const work = [
  {
    what: 'Python Crawler',
    implementation: '',
    result: '',
  },
]

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .inner {
    max-width: 80ch;
    margin: 0 auto;
  }
`

const Links = () => (
  <Container>
    <H2>What people have said about me:</H2>
    <div className="inner">
      {work.map((link, index) => (
        <div key={index}>&bdquo;{link}&ldquo;</div>
      ))}
    </div>
  </Container>
)

export default Links
