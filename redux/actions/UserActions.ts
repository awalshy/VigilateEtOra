import firebase from 'firebase'

import { TUser, TUserActionTypes } from 'config/types/User'
import CONST from 'config/constants'
import * as Storage from 'utils/storage/StorageManager'
// import firebase from 'firebase'

export function updateUser(user: TUser, store?: boolean): TUserActionTypes {
  if (store) Storage.setDataAsync(Storage.Stored.USER, user)
  return {
    type: CONST.USER.USER_UPDATE,
    user
  }
}

export function updateUserToken(
  token: string,
  store?: boolean
): TUserActionTypes {
  if (store) Storage.setDataAsync(Storage.Stored.TOKEN, token)
  return {
    type: CONST.USER.USER_TOKEN_UPDATE,
    token
  }
}

export function userLogin(
  token: string,
  user: TUser,
  store?: boolean
): TUserActionTypes {
  if (store) {
    Storage.setDataAsync(Storage.Stored.TOKEN, token)
    Storage.setDataAsync(Storage.Stored.USER, user)
  }
  return {
    type: CONST.USER.USER_LOGIN,
    token,
    user
  }
}

export function userLogout(): TUserActionTypes {
  Storage.removeDataAsync(Storage.Stored.USER)
  Storage.removeDataAsync(Storage.Stored.TOKEN)
  Storage.removeDataAsync(Storage.Stored.FAVOURITE)
  Storage.removeDataAsync(Storage.Stored.INTENTIONS)
  firebase.auth().signOut()
  return {
    type: CONST.USER.USER_LOGOUT
  }
}
