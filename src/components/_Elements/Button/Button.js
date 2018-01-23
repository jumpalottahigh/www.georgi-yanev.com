import styled from 'styled-components'

const Button = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.4rem;
  width: 16rem;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1rem 0.5rem 1rem 0.5rem;
  background: royalblue;
  color: white;
  border: 2px solid royalblue;
  cursor: pointer;
  line-height: 2rem;

  &:hover {
    background-color: #315de1;
  }
`
export default Button
