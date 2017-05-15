import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import EventsActions from '../Redux/EventsRedux'
import ErrorMessagesActions from '../Redux/ErrorMessagesRedux'

// attempts to login
export function * events (api) {
  const response = yield call(api.events)
  if (response.ok && response.data.events) {
    const events = path(['data', 'events'], response)
    yield put(EventsActions.eventsSuccess(events))
  } else {
    yield put(EventsActions.eventsFailure())
    yield put(ErrorMessagesActions.showMessage('Не удалось получить список ивентов'))
  }
}
