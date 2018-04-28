import React from 'react';
import { Fragment, Link } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';

import Foo from 'components/Foo.jsx';
import Counter from 'components/counter.jsx'
import Wrapper from 'components/Wrapper.jsx';
import List from 'components/List.jsx';
import ListItem from 'components/ListItem.jsx';
import PStyled from 'components/PStyled.jsx';
import themes from 'components/themes.js';

const Content = styled.div`
  margin: 30px;
`;
export default () =>
  <Content>
    <ThemeProvider theme = { themes.nav }>
      <List>
        <ListItem><Link href='/findeMeMore/counter'>Async Counter</Link></ListItem>
        <ListItem><Link href='/findeMeMore/foo'>Foo</Link></ListItem>
        <ListItem><Link href='/findeMeMore/bar'>Bar</Link></ListItem>
      </List>
    </ThemeProvider>
    <hr/>
    <Fragment forRoute='/findeMeMore/counter'>
      <Counter />
    </Fragment>
    <Fragment forRoute='/findeMeMore/foo'>
      <Foo />
    </Fragment>
    <Fragment forRoute='/findeMeMore/bar'>
      <ThemeProvider theme={ themes.bar }>
        <Wrapper>
          <PStyled>Some content could go here</PStyled>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  </Content>;
