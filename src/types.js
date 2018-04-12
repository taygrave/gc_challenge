// @flow

// /* eslint-disable no-unused-vars */
// // ExtractReturn follows suggestion from https://hackernoon.com/redux-flow-type-getting-the-maximum-benefit-from-the-fewest-key-strokes-5c006c54ec87
// type _ExtractReturn<B, F: (*) => B> = B
// export type ExtractReturn<F> = _ExtractReturn<*, F>

export type Element = string | React$Element<any> | Array<React$Element<any>>

export type Event = {
  id: number,
  type: string,
  attributes: {
    cron: string,
    name: string
  }
}

// ACTIONS
export type Init = { type: '@@INIT' }
export type FetchEvents= {
  type: 'FETCHED_EVENTS',
  events: Array<Event>
}

export type AnyAction =
  Init |
  FetchEvents

// STATES
export type eventsState = Array<Event>

export type State = {
  events: eventsState
}
