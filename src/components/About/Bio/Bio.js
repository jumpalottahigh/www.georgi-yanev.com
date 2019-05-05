import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from '../../elements/Button/Button.js'
import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

const StyledBio = styled.section`
  background: #dedede;
`

const Bio = () => (
  <StyledBio>
    <H2>&#123; If you want to learn even more about me... &#125;</H2>
    <CenteredDiv>
      <Link to="/bio/">
        <Button>Full Bio</Button>
      </Link>
    </CenteredDiv>
  </StyledBio>
)

export default Bio
