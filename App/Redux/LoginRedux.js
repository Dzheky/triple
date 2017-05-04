import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['token', 'email'],
  loginFailure: null,
  logout: null,
  registerRequest: ['email', 'password'],
  registerSuccess: ['token'],
  registerFailure: null,
  passwordResetRequest: ['email'],
  passwordResetSuccess: ['message'],
  passwordResetFailure: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { token, email }) =>
  state.merge({ fetching: false, error: null, token, email })

// we've successfully reset password
export const successMessage = (state, { message }) =>
  state.merge({ fetching: false, error: null, message })

// we've had a problem logging in
export const failure = (state) =>
  state.merge({ fetching: false })

// we've logged out
export const logout = (state) => INITIAL_STATE


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,
  [Types.REGISTER_REQUEST]: request,
  [Types.REGISTER_SUCCESS]: success,
  [Types.REGISTER_FAILURE]: failure,
  [Types.PASSWORD_RESET_REQUEST]: request,
  [Types.PASSWORD_RESET_SUCCESS]: successMessage,
  [Types.PASSWORD_RESET_FAILURE]: failure
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (loginState) => loginState.token !== null
