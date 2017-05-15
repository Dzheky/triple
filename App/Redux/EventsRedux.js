import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  eventsRequest: null,
  eventsSuccess: ['events'],
  eventsFailure: null,
  like: ['ids', 'tokenId', 'userId'],
  dislike: ['ids', 'tokenId', 'userId']
})

export const EventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  events: [],
  favorites: [],
  fetching: false,
  results: null
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const request = (state) =>
  state.merge({ fetching: true, events: null })

// successful temperature lookup
export const success = (state, { events }) => {
  let newEvents = events.map((event) => {
    if (state.favorites.indexOf(event.id) !== -1) {
      return {...event, like: true}
    }
    return event
  })
  return state.merge({ fetching: false, error: null, events: newEvents })
}

// failed to get the temperature
export const failure = (state) =>
  state.merge({ fetching: false, error: true, events: [] })

// set likes
export const setLikes = (state, { favorites }) => {
  return state.merge({ favorites })
}

// liking events
export const like = (state, { ids }) => {
  let newEvents = state.events.map((event) => {
    if (event.id === ids) {
      return {...event, like: true}
    }
    return event
  })
  return state.merge({ favorites: [...state.favorites, ids], events: newEvents })
}
// dislike
export const dislike = (state, { ids }) => {
  let newIds = state.favorites.flatMap((element) => {
    if (element === ids) {
      return []
    } else {
      return element
    }
  })
  let newEvents = state.events.map((event) => {
    if (event.id === ids) {
      return {...event, like: false}
    }
    return event
  })
  return state.merge({ favorites: newIds, events: newEvents })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_REQUEST]: request,
  [Types.EVENTS_SUCCESS]: success,
  [Types.EVENTS_FAILURE]: failure,
  [Types.LIKE]: like,
  [Types.DISLIKE]: dislike
})
