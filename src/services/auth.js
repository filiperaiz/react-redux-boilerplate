import {
  getStorageItem,
  setStorageItem,
  removeStorageItem
} from 'utils/storage'

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
  const isAuth = response !== undefined ? response.isValid : null
  return process.env.REACT_APP_AUTH === 'true' || isAuth
}

export async function requestToken() {
  const storageToken = getToken()

  if (!storageToken) {
    const token = await function fetchExample() {}

    setToken(token)

    return token
  }

  return storageToken
}
