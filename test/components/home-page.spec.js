// @flow
import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'
import { Button } from 'react-bootstrap'
import sinon from 'sinon'

import { Unconnected as HomePage } from '../../src/components/home-page'
import Events from '../../src/components/events'

describe('HomePage', () => {
  const defaultActions = {
    fetchEvents: (() => {}: any)
  }

  const render = (props) => {
    const withDefaults = {
      events: [],
      ...defaultActions,
      ...props
    }

    return shallow(<HomePage {...withDefaults} />)
  }

  it('renders w/ defaults', () => {
    const wrapper = render()

    assert(wrapper.find('.home-page').exists())
    assert(wrapper.find(Button).exists())
    assert(!wrapper.find(Events).exists())
  })

  it('renders w/ GmailPage if signed in', () => {
    const wrapper = render({
      events: [{
        id: 0,
        type: 'task',
        attributes: {
          cron: '0 7 14 3 *',
          name: 'Repot Sunny the Succulent'
        }
      }]
    })

    assert(!wrapper.find(Button).exists())
    assert(wrapper.find(Events).exists())
  })

  it('calls fetchEvents on click of button', () => {
    const fetchEvents = sinon.spy()
    const wrapper = render({ fetchEvents })
    const button = wrapper.find(Button)

    assert(button.exists())
    button.simulate('click')
    assert(fetchEvents.calledOnce)
  })
})
