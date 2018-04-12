// @flow
import assert from 'assert'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchEvents } from '../../src/actions'

const mockData = {
  data: [
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
}

jest.mock('axios', () => {
  return {
    get: () => ({
      data: mockData
    })
  }
})

const mockStore = configureStore([ thunk ])

describe('Actions: Events', () => {
  it('fetchEvents dispatches', async () => {
    const store = mockStore({})
    const expected = [
      { type: 'FETCH_EVENTS' },
      {
        type: 'FETCHED_EVENTS',
        events: mockData.data
      }
    ]

    await store.dispatch(fetchEvents())
    assert.deepEqual(expected, store.getActions())
  })
})
