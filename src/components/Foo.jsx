import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, Wrapper, HeaderText, PStyled } from 'components/shared/index.js';
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
        <PStyled>I am styled text!</PStyled>
      </Wrapper>
    </ThemeProvider>
  </Foo>;
