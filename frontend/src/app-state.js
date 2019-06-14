const stateKey = 'appState'

// Define the app state variable
export let AppState = {
  user: null,
  roomList: [],
  selectedRoom: null,
  messages: []
}

export const changeState = (property, value) => {
  AppState[property] = value
  saveState(AppState)
}
const saveState = (state) => {
  localStorage.setItem(stateKey, JSON.stringify(state))
}

export const loadState = () => {
  const loadedState = JSON.parse(localStorage.getItem(stateKey))
  if (loadedState) AppState = loadedState
  return AppState
}

export const clearState = () => {
  AppState.user = null
  AppState.roomList = []
  AppState.selectedRoom = null,
  AppState.messages = []
  localStorage.removeItem(stateKey)
}