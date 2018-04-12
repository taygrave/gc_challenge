// @flow
import assert from 'assert'
import parser from 'cron-parser'
import { mount } from 'enzyme'
import moment from 'moment'
import React from 'react'
import { Table } from 'react-bootstrap'

import Events from '../../src/components/events'

const mockEvents = [
  {
    id: 4,
    type: 'task',
    attributes: {
      cron: '0 14 * *',
      name: 'Farmers Market'
    }
  },
  {
    id: 5,
    type: 'task',
    attributes: {
      cron: '15 7 * * 1-5',
      name: 'Make coffee'
    }
  },
  {
    id: 6,
    type: 'task',
    attributes: {
      cron: '0 6-22 * * *',
      name: 'Stretch and get water'
    }
  }
]

describe('Events', () => {
  const render = (props) => {
    const withDefaults = {
      events: mockEvents,
      ...props
    }

    return mount(<Events {...withDefaults} />)
  }

  it('renders w/ defaults', () => {
    const wrapper = render()

    assert(wrapper.find('.events').exists())
    assert(wrapper.find(Table).exists())
    assert.equal(wrapper.find('.event').length, 3)
  })

  it('correctly renders and parses the event, time, applies classes', () => {
    const wrapper = render()
    const parsedAndFormattedCron = moment(parser.parseExpression(
      mockEvents[2].attributes.cron
    ).prev().toString()).format('l - LT')

    assert.equal(wrapper.find('.event').length, 3)
    assert.equal(wrapper.find('td.upcoming').length, 2)
    assert.equal(wrapper.find('td.recent').length, 1)
    assert.equal(wrapper.find('td.recent').text(), parsedAndFormattedCron)
  })
})
