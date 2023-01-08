import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOW_PROCESSING = 'TOGGLE_IS_FOLLOW_PROCESSING'

let initial = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFetchingProcessing: []
}

const usersReducer = (state = initial, action) => {

  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        //  users: [...state.users],
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      }
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        //  users: [...state.users],
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      }
    }
    case SET_USERS:
      return { ...state, users: [...action.users] }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page }
    case SET_TOTAL_USERS:
      return { ...state, totalUsersCount: action.count }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOW_PROCESSING:
      return {
        ...state,
        isFetchingProcessing: action.isFetching ?
          [...state.isFetchingProcessing, action.id]
          :
          state.isFetchingProcessing.filter(id => id !== action.id),
      }
    default:
      return state
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const changePage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setUsersTotalCount = (count) => ({ type: SET_TOTAL_USERS, count })
export const setToggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setToggleIsFollowProcessing = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOW_PROCESSING, isFetching, id })

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setToggleIsFetching(true))
  const response = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setToggleIsFetching(false))
  dispatch(setUsers(response.items))
  dispatch(setUsersTotalCount(response.totalCount))
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(setToggleIsFollowProcessing(true, id))
  const response = await apiMethod(id)
  if (response.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(setToggleIsFollowProcessing(false, id))
}

export const follow = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess)
  
}

export const unfollow = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default usersReducer