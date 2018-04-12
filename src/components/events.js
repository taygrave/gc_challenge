// @flow
import parser from 'cron-parser'
import moment from 'moment'
import React from 'react'
import { Table } from 'react-bootstrap'

import { type Event } from '../types'

type Props = {
  events: Array<Event>
}

const formatTime = (date: string) => moment(date).format('l - LT')

const renderEvent = (event: Event, now: moment) => {
  const {
    attributes: {
      cron,
      name
    },
    id,
    type
  } = event
  const parsedCron = parser.parseExpression(cron)
  const next = parsedCron.next().toString()
  const previous = parsedCron.prev().toString()
  const isIn24Hours = moment(next).diff(now, 'hours') <= 24
  const hasHappened3Hours = now.diff(previous, 'hours') <= 3

  return (
    <tr className='event' key={id}>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{name}</td>
      <td className={hasHappened3Hours ? 'recent' : ''}>{formatTime(previous)}</td>
      <td className={isIn24Hours ? 'upcoming' : ''}>{formatTime(next)}</td>
    </tr>
  )
}

const Events = (props: Props) => {
  const { events } = props
  const now = moment()

  return (
    <div className='events'>
      <div className='event-key'>
        <div>Key:</div>
        <div className='upcoming'>Happening in 24 Hours!</div>
        <div className='recent'>Completed in the last 3 hours</div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Last Completed</th>
            <th>Upcoming</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => renderEvent(event, now))}
        </tbody>
      </Table>
    </div>
  )
}

export default Events
