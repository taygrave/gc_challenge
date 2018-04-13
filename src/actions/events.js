// @flow
/* globals Dispatch */
import axios from 'axios'
import parser from 'cron-parser'
import moment from 'moment'

import type { AnyAction } from '../types'

const formatTime = (date: string) => moment(date).format('l - LT')

export const fetchEvents = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: 'FETCH_EVENTS' })
  const { data: { data } } = await axios.get('https://scheduler-challenge.herokuapp.com/schedule')
  const now = moment()

  // TODO Extricate the data parsing and formatting into a separate util function that can be properly tested on any date
  const formattedEvents = data.map(event => {
    const { attributes: { cron } } = event
    const parsedCron = parser.parseExpression(cron)
    const next = parsedCron.next().toString()
    const previous = parsedCron.prev().toString()
    const isIn24Hours = moment(next).diff(now, 'hours') <= 24
    const hasHappened3Hours = now.diff(previous, 'hours') <= 3

    return {
      ...event,
      upcoming: formatTime(next),
      recent: formatTime(previous),
      isIn24Hours,
      hasHappened3Hours
    }
  })

  dispatch({
    type: 'FETCHED_EVENTS',
    events: formattedEvents
  })
}
