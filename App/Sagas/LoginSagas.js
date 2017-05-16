import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import LoginActions from '../Redux/LoginRedux'
import EventsActions from '../Redux/EventsRedux'
import ErrorMessagesActions from '../Redux/ErrorMessagesRedux'
import { Actions, ActionConst } from 'react-native-router-flux'

// attempts to login
export function * login (api, {username, password}) {
  if (password === '') {
    yield put(LoginActions.loginFailure())
    yield put(ErrorMessagesActions.showMessage('Введите пароль'))
  } else {
    const response = yield call(api.login, username, password)
    const token = path(['data', 'access_token'], response)
    const tokenId = path(['data', 'id_token'], response)
    const userInfo = yield call(api.getUserInfo, token)
    const userId = path(['data', 'user_id'], userInfo)
    const userMetaData = path(['data', 'user_metadata'], userInfo)
    if (response.ok && response.data.access_token) {
      if (userMetaData && userMetaData.favorites) {
        yield put(EventsActions.setLikes(userMetaData.favorites))
      }
      yield put(LoginActions.loginSuccess(token, username, tokenId, userId, userMetaData))
      yield Actions.tabbar({ type: ActionConst.RESET })
      yield put(ErrorMessagesActions.showMessage('Вы вошли как ' + username))
    } else {
      let message = response.data.error_description === 'Wrong email or password.' ? 'Неправильный email или пароль!' : 'Что-то пошло не так!'
      yield put(LoginActions.loginFailure())
      yield put(ErrorMessagesActions.showMessage(message))
    }
  }
}

export function * register (api, { email, password }) {
  if (password === '' && email === '') {
    yield put(LoginActions.registerFailure())
    yield put(ErrorMessagesActions.showMessage('Введите email и пароль!'))
  } else {
    const response = yield call(api.register, email, password)
    if (response.ok && response.data._id) {
      yield put(LoginActions.registerSuccess(null))
      yield put(LoginActions.loginRequest(email, password))
    } else {
      let message = response.data.description === 'The user already exists.' ? 'Пользователь с таким email уже существует!' : 'Что-то пошло не так!'
      yield put(LoginActions.registerFailure())
      yield put(ErrorMessagesActions.showMessage(message))
    }
  }
}

export function * passwordReset (api, { email }) {
  if (email === '') {
    yield put(ErrorMessagesActions.showMessage('Введите ваш email!'))
    yield put(LoginActions.passwordResetFailure())
  } else {
    const response = yield call(api.resetPassword, email)
    if (response.ok) {
      yield put(LoginActions.passwordResetSuccess())
      yield put(ErrorMessagesActions.showMessage('Мы отправили вам email для восстановления пароля!'))
    }
  }
}
