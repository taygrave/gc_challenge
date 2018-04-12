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

// data

// {
//   "data": [
//     {
//       "id": "0",
//       "type": "task",
//       "attributes": {
//         "cron": "0 7 14 3 *",
//         "name": "Repot Sunny the Succulent"
//       }
//     },
//     {
//       "id": "1",
//       "type": "task",
//       "attributes": {
//         "cron": "0 18 20 * *",
//         "name": "Pick up Grove order from mailroom"
//       }
//     },
//     {
//       "id": "2",
//       "type": "task",
//       "attributes": {
//         "cron": "30 7 * * 1",
//         "name": "Water Sunny the Succulent"
//       }
//     },
//     {
//       "id": "3",
//       "type": "task",
//       "attributes": {
//         "cron": "0 12 * * 3",
//         "name": "Lunch with Mrs. Meyers"
//       }
//     },
//     {
//       "id": "4",
//       "type": "task",
//       "attributes": {
//         "cron": "0 14 * *",
//         "name": "Farmer's Market"
//       }
//     },
//     {
//       "id": "5",
//       "type": "task",
//       "attributes": {
//         "cron": "15 7 * * 1-5",
//         "name": "Make coffee"
//       }
//     },
//     {
//       "id": "6",
//       "type": "task",
//       "attributes": {
//         "cron": "0 6-22 * * *",
//         "name": "Stretch and get water"
//       }
//     }
//   ]
// }
