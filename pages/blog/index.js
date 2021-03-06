import React from 'react'

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import { startClock } from '../../lib/clock/actions'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Submit from '../../components/Submit'
import PostList from '../../components/PostList'

class BlogIndex extends React.Component {
  componentDidMount() {
    this.props.store.dispatch(startClock())
  }

  render() {
    return (
      <Container>
        <Header />
        <Submit />
        <PostList />
      </Container>
    )
  }
}

export default withReduxSaga(withApollo(BlogIndex))
