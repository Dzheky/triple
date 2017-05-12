export default {
  // Functions return fixtures
  login: (username, password) => {
    return {
      ok: true,
      data: {
        access_token: 'tesetAccessToken'
      }
    }
  },
  register: (email, password) => {
    return {
      ok: true,
      data: {
        _id: 'testId'
      }
    }
  },
  resetPassword: (email) => {
    return {
      ok: true,
      data: "We've just sent you an email to reset your password."
    }
  },
  events: () => {
    return {
      ok: true,
      data: require('../Fixtures/events.json')
    }
  },



  // EXAMPLE //
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
