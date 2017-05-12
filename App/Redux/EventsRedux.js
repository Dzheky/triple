import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  eventsRequest: null,
  eventsSuccess: ['events'],
  eventsFailure: null
})

export const EventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  events: [],
  favorites: null,
  fetching: false,
  results: null
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const request = (state) =>
  state.merge({ fetching: true, events: null })

// successful temperature lookup
export const success = (state, events) => {
  const { avatar } = action
  return state.merge({ fetching: false, error: null, events })
}

// failed to get the temperature
export const failure = (state) =>
  state.merge({ fetching: false, error: true, events: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_REQUEST]: request,
  [Types.EVENTS_SUCCESS]: success,
  [Types.EVENTS_FAILURE]: failure
})
