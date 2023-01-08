const ADD_MESSAGE = 'dialog/ADD-MESSAGE';

let initial = {
  dialogs: [
    { id: 1, name: "Dima", isActive: false, isUnread: false },
    { id: 2, name: "Andrew", isActive: false, isUnread: true },
    { id: 3, name: "Alex", isActive: false, isUnread: true },
    { id: 4, name: "Victor", isActive: false, isUnread: false },
    { id: 5, name: "Vlad", isActive: false, isUnread: false },
    { id: 6, name: "Sveta", isActive: true, isUnread: false },
  ],
  messages: [
    { id: 1, text: "My first message", isMy: true, isUnread: false },
    { id: 2, text: "Hello there", isMy: true, isUnread: false },
    { id: 3, text: "Hi. How are you?", isMy: false, isUnread: false },
    { id: 4, text: "Fine, thanks and you?", isMy: true, isUnread: false },
    { id: 5, text: "Ok. Thanks", isMy: false, isUnread: false },
    { id: 6, text: "New message", isMy: true, isUnread: true },
  ]
}

const dialogsReducer = (state = initial, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 7,
        text: action.message,
        isMy: true,
        isUnread: true
      }
      let stateCopy = { ...state }
      stateCopy.messages = [ ...state.messages ]
      stateCopy.messages.push(newMessage)
      return stateCopy
    }
    default:
      return state
  }
}

export const sendMessageCreator = (message) => ({ type: ADD_MESSAGE, message })

export default dialogsReducer