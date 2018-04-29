import React from 'react';
import styled from 'styled-components';
import Content from 'components/Content.jsx';
import StartPage from 'containers/StartPage.jsx';
const App = styled.div`
  margin: 30px;
`;
export default () =>
  <App>
    <Content />
    <StartPage />
  </App>;
