import { profileApi } from "../api/api"

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PHOTO = 'profile/SET_PHOTO'

let initial = {
  profile: null,
  posts: [
    { id: 1, text: 'How are you?', likesCount: 23 },
    { id: 2, text: 'It`s my first post', likesCount: 43 },
    { id: 3, text: 'React post', likesCount: 25 },
    { id: 4, text: 'Test post', likesCount: 18 },
    { id: 5, text: 'Long message for testing layout', likesCount: 5 }
  ],
  status: ''
}

const profileReducer = (state = initial, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.slice(-1)[0].id + 1,
        text: action.text,
        likesCount: 0
      }
      let stateCopy = { ...state }
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      return stateCopy;
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter(p => p.id !== action.id)}
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return { ...state, status: action.status }
    case SET_PHOTO:
      return { ...state, profile: { ...state.profile, photos: action.photo } }
    default:
      return state
  }
}

export const setProfileData = (profile) => ({ type: SET_USER_PROFILE, profile })

export const addPostCreator = (text) => ({ type: ADD_POST, text })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const deletePost = (id) => ({ type: DELETE_POST, id })

export const savePhotoSuccess = (photo) => ({ type: SET_PHOTO, photo})

export const getProfile = (id) => async (dispatch) => {
  const response = await profileApi.getProfile(id)
  dispatch(setProfileData(response))
}

export const getStatus = (id) => async (dispatch) => {
  const response = await profileApi.getStatus(id)
  dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileApi.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileApi.savePhoto(file)
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos))
  }
}

export const saveProfile = data => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileApi.saveProfile(data)
  if (response.resultCode === 0) {
    dispatch(getProfile(userId))
  } else {
    let message = response.messages.length ? response.messages[0] : 'Some error'
    return Promise.reject(message)
  }
}

export default profileReducer