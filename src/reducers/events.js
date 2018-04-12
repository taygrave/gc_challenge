// @flow
import {
  type AnyAction,
  type eventsState as State
} from '../types'

export default (state: State = [], action: AnyAction): State => {
  switch (action.type) {
    case 'FETCHED_EVENTS': {
      const { events } = action

      return [
        ...state,
        ...events
      ]
    }
    default:
      return state
  }
}
