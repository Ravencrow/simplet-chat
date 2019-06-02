export const actions = {
  registerUser: (store, user) => {
    store.setState({ user: user })
    console.log(store)
  }
}
