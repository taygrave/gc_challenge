// @flow
import assert from 'assert'

import reducer from '../../src/reducers/events'

describe('Reducers: Events', () => {
  const initialState = []
  const mockEvents = [
    {
      id: 0,
      type: 'task',
      attributes: {
        cron: '0 7 14 3 *',
        name: 'Repot Sunny the Succulent'
      }
    },
    {
      id: 1,
      type: 'task',
      attributes: {
        cron: '0 18 20 * *',
        name: 'Pick up Grove order from mailroom'
      }
    },
    {
      id: 2,
      type: 'task',
      attributes: {
        cron: '30 7 * * 1',
        name: 'Water Sunny the Succulent'
      }
    }
  ]

  it('should return the initial state on @@INIT', () => {
    assert.deepEqual(
      reducer(undefined, { type: '@@INIT' }),
      initialState
    )
  })

  it('should set the events on FETCHED_EVENTS', () => {
    const action = {
      type: 'FETCHED_EVENTS',
      events: mockEvents
    }

    assert.deepEqual(
      reducer(initialState, action),
      mockEvents
    )
  })
})
