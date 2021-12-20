const APP_KEY = 'APP_KEY'

export function getStorageItem(key) {
  if (typeof window === 'undefined') return

  const data = window.sessionStorage.getItem(`${APP_KEY}_${key.toUpperCase()}`)
  return JSON.parse(data)
}

export function setStorageItem(key, value) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.sessionStorage.setItem(`${APP_KEY}_${key.toUpperCase()}`, data)
}

export function removeStorageItem(key) {
  window.sessionStorage.removeItem(`${APP_KEY}_${key.toUpperCase()}`)
}

export function clearStorage() {
  window.sessionStorage.clear()
}
