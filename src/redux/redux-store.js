import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth-reducer"
// import { combineReducers, createStore } from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-reducer"

// let reducers = combineReducers({
//   profilePage: profileReducer,
//   dialogsPage: dialogsReducer,
//   sidebar: sidebarReducer
// })

// let store =  createStore(reducers)

let reducers = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
}
let store = configureStore({reducer: reducers}, applyMiddleware(thunkMiddleware))

export default store;