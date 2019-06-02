import React from 'react'
import useGlobalHook from 'use-global-hook'
import './App.css'
import RegistrationPage from './registration-page/RegistrationPage'
import { initialState } from './app-state/initial-state'
import { actions } from './app-state/actions'
import { userKey } from './shared/user-service'

function ChatPage({ user }) {
  return <div>{user}</div>
}

initialState.user = localStorage.getItem(userKey)

const useGlobal = useGlobalHook(React, initialState, actions)

function App() {
  let shownView

  const [globalState, globalActions] = useGlobal()

  const onRegisterUser = user => {
    localStorage.setItem(userKey, user)
    globalActions.registerUser(user)
  }

  if (globalState.user) {
    shownView = <ChatPage user={globalState.user} />
  } else {
    shownView = <RegistrationPage onRegisterUser={onRegisterUser} />
  }

  return (
    <div className="App">
      <h1>ChatOn</h1>
      {shownView}
    </div>
  )
}

export default App
