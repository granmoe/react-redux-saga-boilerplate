import styled from 'styled-components';

export default styled.p`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
`;
