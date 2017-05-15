import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  showMessage: ['message'],
  hideMessage: null
})

export const ErrorMessagesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  showErrorMessage: false,
  errorMessage: ''
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const showMessage = (state, { message }) =>
  state.merge({ errorMessage: message, showErrorMessage: true })

// successful temperature lookup
export const hideMessage = (state) => {
  return state.merge({ showErrorMessage: false })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_MESSAGE]: showMessage,
  [Types.HIDE_MESSAGE]: hideMessage
})
