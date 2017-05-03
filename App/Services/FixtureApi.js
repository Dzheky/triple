export default {
  // Functions return fixtures
  login: (username, password) => {
    return {
      access_token: 'tesetAccessToken'
    }
  },
  register: (email, password) => {
    return {
      _id: 'testId'
    }
  },
  resetPassword: (email) => {
    return "We've just sent you an email to reset your password."
  },
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  getEvents: () => {
    return {
      ok: true,
      data: require('../Fixtures/events.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../Fixtures/gantman.json')
    const skellockData = require('../Fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  }
}
