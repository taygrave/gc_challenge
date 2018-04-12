// @flow
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { fetchEvents } from '../actions'
import Events from './events'

import { type Event } from '../types'

type HomeProps = {
  events: Array<Event>,
  fetchEvents: typeof fetchEvents
}

class HomePage extends Component<HomeProps> {
  render () {
    const {
      events,
      fetchEvents
    } = this.props

    return (
      <div className='home-page'>
        <h1>Grove Scheduler</h1>
        {events.length === 0
          ? <Button bsStyle='info' onClick={fetchEvents}>
            Get My Events
          </Button>
          : <Events events={events} />
        }
      </div>
    )
  }
}

export const Unconnected = HomePage

export default connect(
  (state) => ({
    events: state.events
  }),
  {
    fetchEvents
  }
)(HomePage)
