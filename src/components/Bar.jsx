import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Wrapper, HeaderText, PStyled } from 'components/shared/index.js';
import themes from 'components/themes.js';

const Bar = styled.div`
  margin: 30px;
`;

export default () =>
  <Bar>
    <ThemeProvider theme={ themes.bar }>
      <Wrapper>
        <HeaderText>
          <PStyled normal>Some content could go here</PStyled>
        </HeaderText>
      </Wrapper>
    </ThemeProvider>
  </Bar>;
