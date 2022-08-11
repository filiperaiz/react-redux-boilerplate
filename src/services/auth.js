import {
  getStorageItem,
  setStorageItem,
  removeStorageItem
} from 'utils/storage'

import { getRequest } from './example'

export function getDevEnv() {
  return process.env.REACT_APP_DEV === 'true' || false
}

export function getToken() {
  return getStorageItem('token')
}

export function setToken(newToken) {
  setStorageItem('token', newToken)
}

export function deleteToken() {
  removeStorageItem('token')
}

export function isAuthenticated() {
  const response = getToken()

  return response?.isValid || false
}

export async function requestToken() {
  const storageToken = getToken()

  if (!storageToken) {
    const token = await getRequest()

    setToken(token)

    return token
  }

  return storageToken
}
