function saveToLocalStorage<T>(key: string, state: T) {
  const stateAsString = JSON.stringify(state)

  localStorage.setItem(key, stateAsString)
}

export default saveToLocalStorage
