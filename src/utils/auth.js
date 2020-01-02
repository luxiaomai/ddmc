import { setLocal, getLocal } from './storage'

const TokenKey = 'token'

const getToken = () => {
  return getLocal(TokenKey)
}

const setToken = (token) => {
  return setLocal(TokenKey, token)
}

export {
  getToken,
  setToken
}
