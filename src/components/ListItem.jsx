import styled from 'styled-components';
export default styled.li`
  display: inline;
  text-decoration: none;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
`
