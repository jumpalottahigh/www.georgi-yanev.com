import styled from 'styled-components'

const CenteredDiv = styled.div`
  justify-self: center;

  p,
  & > div {
    max-width: 70ch;
  }
`
export default CenteredDiv
