import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { EventsTypes } from '../Redux/EventsRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login, register, passwordReset } from './LoginSagas'
import { getUserAvatar } from './GithubSagas'
import { openScreen } from './OpenScreenSagas'
import { events } from './EventsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),

    // some sagas receive extra parameters in addition to an action
    // EXAMPLE //
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    // EVENTS //
    takeLatest(EventsTypes.EVENTS_REQUEST, events, api),

    // LOGIN //
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(LoginTypes.REGISTER_REQUEST, register, api),
    takeLatest(LoginTypes.PASSWORD_RESET_REQUEST, passwordReset, api)
  ]
}
