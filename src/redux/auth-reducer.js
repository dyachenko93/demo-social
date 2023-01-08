import { authAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_AUTH_ERROR = 'auth/SET_AUTH_ERROR'

let initial = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  authError: ''
}

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.message
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA, data: { userId: userId, email: email, login: login, isAuth: isAuth }
})

export const checkAuth = () => async (dispatch) => {
  let response = await authAPI.checkAuth()
  if (response.resultCode === 0) {
    let { id, email, login } = response.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const setAuthError = (message) => ({
  type: SET_AUTH_ERROR, message: message
})

export const login = (login, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(login, password, rememberMe)
  if (response.resultCode === 0) {
    dispatch(setAuthError(''))
    dispatch(checkAuth())
  } else {
    let message = response.messages.length ? response.messages[0] : 'Some error'
    dispatch(setAuthError(message))
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer