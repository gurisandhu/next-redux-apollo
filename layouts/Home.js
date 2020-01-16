import React from 'react'
import { connect } from 'react-redux'

import PageCount from '../components/PageCount'
import Clock from '../components/Clock'
import Placeholder from '../components/Placeholder'

function Page({ clock, placeholder, linkTo, title }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <Clock lastUpdate={clock.lastUpdate} light={clock.light} />
      <PageCount />
      <Placeholder placeholder={placeholder} />
    </React.Fragment>
  )
}

export default connect(state => state)(Page)
