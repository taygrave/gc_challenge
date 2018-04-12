// @flow
/* globals Dispatch */
import axios from 'axios'

import type { AnyAction } from '../types'

export const fetchEvents = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: 'FETCH_EVENTS' })
  const { data: { data } } = await axios.get('https://scheduler-challenge.herokuapp.com/schedule')

  dispatch({
    type: 'FETCHED_EVENTS',
    events: data
  })
}
