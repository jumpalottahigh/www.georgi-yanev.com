import styled from 'styled-components'

const H2 = styled.h2`
  margin-top: 0;
  color: #0275d8;

  &:before {
    content: '{...} ';
  }

  &:after {
    content: ' }';
  }
`
export default H2
