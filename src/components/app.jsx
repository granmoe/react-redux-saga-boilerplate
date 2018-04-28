import React from 'react'
import { Fragment, Link } from 'redux-little-router'
import styled from 'styled-components'

import Counter from 'components/counter.jsx'

const App = styled.div`
  margin: 30px;
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`

const ListItem = styled.li`
  display: inline;
`

export default () =>
  <App>
    <List>
      <ListItem><Link href="/findeMeMore/counter">Async Counter</Link></ListItem>
      <ListItem><Link href="/findeMeMore/foo">Foo</Link></ListItem>
      <ListItem><Link href="/findeMeMore/bar">Bar</Link></ListItem>
    </List>

    <hr/>

    <Fragment forRoute="/findeMeMore/counter">
      <Counter />
    </Fragment>
    <Fragment forRoute="/findeMeMore/foo">
      <p>Just a placeholder</p>
    </Fragment>
    <Fragment forRoute="/findeMeMore/bar">
      <p>Some content could go here</p>
    </Fragment>
  </App>
