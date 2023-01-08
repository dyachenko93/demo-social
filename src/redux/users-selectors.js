import { createSelector } from "reselect"

const getUsers = (state) => {
  return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter(u => true)
})

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getUsersCount = (state) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getisFetching = (state) => {
  return state.usersPage.isFetching
}

export const getIsFetchingProcessing = (state) => {
  return state.usersPage.isFetchingProcessing
}
