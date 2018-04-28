import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from 'components/Button.jsx';
import Wrapper from 'components/Wrapper.jsx';
import HeaderText from 'components/HeaderText.jsx';
import themes from 'components/themes.js';

const Foo = styled.div`
  margin: 30px;
`;

export default () =>
  <Foo>
    <ThemeProvider theme={ themes.foo }>
      <Wrapper>
        <HeaderText>I am some header text!</HeaderText>
        <Button primary>Primary</Button>
        <Button>Regular</Button>
        <HeaderText>I am more header text!</HeaderText>
      </Wrapper>
    </ThemeProvider>
  </Foo>;
