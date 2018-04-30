import React from 'react';
import { Fragment, Link } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';

import Foo from 'components/Foo.jsx';
import Bar from 'components/Bar.jsx';
import Counter from 'components/counter.jsx';
import List from 'components/List.jsx';
import ListItem from 'components/ListItem.jsx';
import StartPage from 'components/StartPage.jsx';

import themes from 'components/themes.js';

const Content = styled.div`
  margin: 30px;
`;
export default () =>
  <Content>
    <ThemeProvider theme = { themes.nav }>
      <List>
        <ListItem><Link href='/findMeMore/counter'>Async Counter</Link></ListItem>
        <ListItem><Link href='/findMeMore/startPage'>Start Page</Link></ListItem>
        <ListItem><Link href='/findMeMore/help'>Help</Link></ListItem>
      </List>
    </ThemeProvider>
    <hr/>
    <Fragment forRoute='/findMeMore/counter'>
      <Counter />
    </Fragment>
    <Fragment forRoute='/findMeMore/startPage'>
      <StartPage />
    </Fragment>
    <Fragment forRoute='/findMeMore/help'>
      <Foo />
    </Fragment>
    <Fragment forRoute='/findMeMore/bar'>
      <Bar />
    </Fragment>
  </Content>;
