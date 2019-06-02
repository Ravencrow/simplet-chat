export function registerUser(user) {
  if (!user) return

  localStorage.setItem(userKey, user)
}

export function logoutUser() {
  localStorage.removeItem(userKey)
}

// Constants
export const userKey = 'user'