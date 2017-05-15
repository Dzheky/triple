import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import LikeActions from '../Redux/LikeButtonRedux'
import { Actions, ActionConst } from 'react-native-router-flux'

// attempts to login
export function * like (api, { username, password }, ) {
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
    if(response.ok && response.data.access_token) {
      yield put(LoginActions.loginSuccess(token, username, tokenId, userId, userMetaData))
      yield Actions.tabbar({type: ActionConst.RESET})
      yield put(ErrorMessagesActions.showMessage('Вы вошли как '+username))
    } else {
      let message = response.data.error_description === 'Wrong email or password.' ? 'Неправильный email или пароль!' : 'Что-то пошло не так!'
      yield put(LoginActions.loginFailure())
      yield put(ErrorMessagesActions.showMessage(message))
    }
  }
}

export function * dislike (api, { email, password }) {
  if (password === '' && email === '') {
    yield put(LoginActions.registerFailure())
    yield put(ErrorMessagesActions.showMessage('Введите email и пароль!'))
  } else {
    const response = yield call(api.register, email, password)
    if(response.ok && response.data._id) {
      yield put(LoginActions.registerSuccess(null))
      yield put(LoginActions.loginRequest(email, password))
    } else {
      let message = response.data.description === 'The user already exists.' ? 'Пользователь с таким email уже существует!' : 'Что-то пошло не так!'
      yield put(LoginActions.registerFailure())
      yield put(ErrorMessagesActions.showMessage(message))
    }
  }
}
