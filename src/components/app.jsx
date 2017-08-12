import React from 'react'
import { Fragment, Link } from 'redux-little-router'
import styled from 'emotion/react'

import Counter from 'components/counter.jsx'

const App = styled.div`
  margin: 30px;
`

const List = styled.List`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`

const ListItem = styled.ListItem`
  display: inline;
`

export default () =>
  <App>
    <List>
      <ListItem><Link href="/react-redux-saga-boilerplate/counter">Async Counter</Link></ListItem>
      <ListItem><Link href="/react-redux-saga-boilerplate/foo">Foo</Link></ListItem>
      <ListItem><Link href="/react-redux-saga-boilerplate/bar">Bar</Link></ListItem>
    </List>

    <hr/>

    <Fragment forRoute="/react-redux-saga-boilerplate/counter">
      <Counter />
    </Fragment>
    <Fragment forRoute="/react-redux-saga-boilerplate/foo">
      <p>Just a placeholder</p>
    </Fragment>
    <Fragment forRoute="/react-redux-saga-boilerplate/bar">
      <p>Some content could go here</p>
    </Fragment>
  </App>
