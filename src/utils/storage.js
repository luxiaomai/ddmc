const setLocal = (key, val, exp) => {
  const val1 = typeof (val) === 'string' ? val : JSON.stringify(val)
  const now = Date.parse(new Date()) / 1000
  const end = now + exp
  localStorage.setItem(key, val1)
  if (exp) localStorage.setItem(key + '_exp', end)
}
const getLocal = (key) => {
  const val = typeof (localStorage.getItem(key)) === 'string' ? localStorage.getItem(key) : JSON.parse(localStorage.getItem(key))
  const now = Date.parse(new Date()) / 1000
  const exp = localStorage.getItem(key + '_exp')
  let time = exp - now

  if (exp && time > 0) {
    return val
  } else if (val) {
    return val
  } else {
    localStorage.removeItem(key)
    return undefined
  }
}

const delLocal = (key) => {
  localStorage.removeItem(key)
}

const setSession = (key, val, exp) => {
  key = typeof (key) === 'string' ? key : JSON.stringify(key)
  val = typeof (val) === 'string' ? val : JSON.stringify(val)
  const now = Date.parse(new Date()) / 1000
  const end = now + exp
  sessionStorage.setItem(key, val)
  if (exp) sessionStorage.setItem(key + '_exp', end)
}
const getSession = (key) => {
  const val = sessionStorage.getItem(key) || JSON.parse(sessionStorage.getItem(key))
  const now = Date.parse(new Date()) / 1000
  const exp = sessionStorage.getItem(key + '_exp')

  if (exp && exp - now > 0) {
    return val
  } else {
    sessionStorage.removeItem(key)
    return undefined
  }
}

const delSession = (key) => {
  sessionStorage.removeItem(key)
}

export {
  getLocal,
  setLocal,
  delLocal,
  getSession,
  setSession,
  delSession
}
