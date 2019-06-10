import { AppState } from '../app-state';

export function registerUser(user) {
  if (!user) return

  AppState.user = user
  localStorage.setItem(userKey, user)
}

export function logoutUser() {
  AppState.user = null
  localStorage.removeItem(userKey)
}

export function getRegisteredUser() {
  return localStorage.getItem(userKey)
}

// Constants
export const userKey = 'user'