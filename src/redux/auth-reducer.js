import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_AUTH_ERROR = 'auth/SET_AUTH_ERROR'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

let initial = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  authError: '',
  captchaUrl: null
}

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
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

export const setAuthUserData = (userId, email, login, isAuth, captchaUrl) => ({
  type: SET_USER_DATA, payload: { userId, email, login, isAuth, captchaUrl }
})

export const getCartchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
})

export const checkAuth = () => async (dispatch) => {
  let response = await authAPI.checkAuth()
  if (response.resultCode === 0) {
    let { id, email, login } = response.data
    dispatch(setAuthUserData(id, email, login, true, null))
  }
}

export const setAuthError = (message) => ({
  type: SET_AUTH_ERROR, message: message
})

export const login = (login, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(login, password, rememberMe, captcha)
  if (response.resultCode === 0) {
    dispatch(setAuthError(''))
    dispatch(checkAuth())
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    let message = response.messages.length ? response.messages[0] : 'Some error'
    dispatch(setAuthError(message))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptcha()
  let captchaUrl = response.url
  dispatch(getCartchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null))
  }
}

export default authReducer