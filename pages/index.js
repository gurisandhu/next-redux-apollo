import React from 'react'

import { connect } from 'react-redux'

import { startClock } from '../lib/clock/actions'
import { countIncrease } from '../lib/count/actions'
import { loadData } from '../lib/placeholder/actions'

import Container from '../components/Container'
import Header from '../components/Header'
import Home from '../layouts/Home'

class PageIndex extends React.Component {
  static async getInitialProps({ ctx: { store } }) {
    store.dispatch(countIncrease())
    if (!store.getState().placeholder.data) {
      store.dispatch(loadData())
    }
  }

  componentDidMount() {
    this.props.dispatch(startClock())
  }

  render() {
    return (
      <Container>
        <Header />
        <Home title="Home Page" />
      </Container>
    )
  }
}

export default connect()(PageIndex)
