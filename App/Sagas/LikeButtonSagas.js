import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import EventsActions from '../Redux/EventsRedux'
import { Actions, ActionConst } from 'react-native-router-flux'

// attempts to login
export function * like (api, { ids, tokenId, userId, token }, ) {
  if (tokenId && userId && token) {
    const currentInfo = yield call(api.getUserInfo, token)
    const favorites = path(['data', 'user_metadata', 'favorites'], currentInfo)
    if(currentInfo.ok && favorites) {
      yield call(api.updateMetaData, userId, tokenId, { favorites: [...favorites, ids]})
    } else if(currentInfo.ok) {
      yield call(api.updateMetaData, userId, tokenId, { favorites: [ids]})
    }
  }
}

export function * dislike (api, { ids, tokenId, userId, token }) {
  if (tokenId && userId && token) {
    const currentInfo = yield call(api.getUserInfo, token)
    const favorites = path(['data', 'user_metadata', 'favorites'], currentInfo)
    if(currentInfo.ok && favorites && favorites.length) {
      favorites = favorites.filter((element) => {
        return element !== ids
      })
      yield call(api.updateMetaData, userId, tokenId, { favorites: favorites})
    } else if(currentInfo.ok) {
      yield call(api.updateMetaData, userId, tokenId, { favorites: []})
    }
  }
}
