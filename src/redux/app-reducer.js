import { checkAuth } from "./auth-reducer"

const SET_INITIALIZED = 'app/SET_INITIALIZED'

let initial = {
  initialized: false,
}

const appReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const setInitializingSuccess = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => async (dispatch) => {
  await dispatch(checkAuth())
  // dispatch(anotherAction())
  // dispatch(anotherAction())

  // Promise.all([promise1, promise2]).then(() => dispatch(actionAfterAllPromises()))
  dispatch(setInitializingSuccess())
}

export default appReducer