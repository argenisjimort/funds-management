const loggedUserTokenName = `loggedUser`

export const getPersistentUser = () => window.localStorage.getItem(loggedUserTokenName)
export const removePersistentUser = () => window.localStorage.removeItem(loggedUserTokenName)
export const setPersistentUser = (user) => window.localStorage.setItem(loggedUserTokenName, JSON.stringify(user))
// export const isPersistentUserLogged = () => getPersistentUser() ? true : false

