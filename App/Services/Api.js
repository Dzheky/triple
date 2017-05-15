// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Secrets from 'react-native-config'

// our 'constructor'
const create = (baseURL = 'https://api.github.com/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //

  // EXAMPLE //
  const api = apisauce.create({
    // base URL is read from the 'constructor'
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const event = apisauce.create({
    baseURL: 'https://wcsserver-dzheky.c9users.io',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  })

  const loginApi = apisauce.create({
    baseURL: 'https://dzheky.eu.auth0.com/',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  })

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce)
    loginApi.addMonitor(console.tron.apisauce)
    event.addMonitor(console.tron.apisauce)
  }

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than 'get', 'post' and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  // LOGIN //
  const login = (username, password) => loginApi.post('oauth/ro', { client_id: Secrets.AUTH0_KEY, username, password, connection: 'Triple', grant_type: 'password', scope: 'openid' })
  const register = (email, password) => loginApi.post('dbconnections/signup', { client_id: Secrets.AUTH0_KEY, email, password, connection: 'Triple' })
  const resetPassword = (email) => loginApi.post('dbconnections/change_password', { client_id: Secrets.AUTH0_KEY, email, connection: 'Triple' })

  // METADATA MANEGMENT //
  const getUserInfo = (token) => loginApi.get('userinfo', {},
    {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  const updateMetaData = (userID, idToken, data) => loginApi.patch('api/v2/users/' + userID,
    {
      'user_metadata': data
    },
    {
      headers: { 'Authorization': `Bearer ${idToken}` }
    })

  // GET EVENTS //
  const events = () => event.get('events')

  // EXAMPLE //
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getEvents = () => api.get('eventList')
  const getUser = (username) => api.get('search/users', {q: username})

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getEvents,
    getUser,
    getUserInfo,
    updateMetaData,
    events,
    login,
    register,
    resetPassword
  }
}

// let's return back our create method as the default.
export default {
  create
}
