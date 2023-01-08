import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const EDIT_POST_MESSAGE = 'EDIT-POST-MESSAGE';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const EDIT_DILOG_MESSAGE = 'EDIT-DIALOG-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'How are you?', likesCount: 23 },
        { id: 2, text: 'It`s my first post', likesCount: 43 },
        { id: 3, text: 'React post', likesCount: 25 },
        { id: 4, text: 'Test post', likesCount: 18 },
        { id: 5, text: 'Long message for testing layout', likesCount: 5 }
      ],
      postMessage: ''
    },
    dialogsPage: {
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
      ],
      messageText: ''
    },
    sidebar: {
      friends: ['Alex', 'Nick', 'John']
    }
  },
  _callSubscriber() {
    console.log("State changed")
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profileReducer = profileReducer(this._state.profilePage, action);
    this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarReducer = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    // if(action.type === ADD_POST) {
    //   this._addPost()
    // } else if(action.type === EDIT_POST_MESSAGE) {
    //   this._editPostMessage(action.text)
    // } else if(action.type === ADD_MESSAGE) {
    //   this._addMessage()
    // } else if(action.type === EDIT_DILOG_MESSAGE) {
    //   this._editDialogMessage(action.text)
    // } 
  },
  // _editPostMessage(text) {
  //   this._state.profilePage.postMessage = text;
  //   this._callSubscriber(this._state);
  // },
  // _addPost() {
  //   let newPost = {
  //     id: 5,
  //     text: this._state.profilePage.postMessage,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.postMessage = '';
  //   this._callSubscriber(this._state);
  // },
  // _editDialogMessage(text) {
  //   this._state.dialogsPage.messageText = text;
  //   this._callSubscriber(this._state);
  // },
  // _addMessage() {
  //   let newMessage = {
  //     id: 7,
  //     text: this._state.dialogsPage.messageText,
  //     isMy: true,
  //     isUnread: true
  //   };
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.messageText = '';
  //   this._callSubscriber(this._state);
  // }
}

// export const addPostCreator = () => ({ type: ADD_POST })

// export const updatePostMessageCreator = text =>
//   ({ type: EDIT_POST_MESSAGE, text: text })


// export const sendMessageCreator = () => ({ type: ADD_MESSAGE })

// export const updateDialogMessageCreator = text => 
//   ({ type: EDIT_DILOG_MESSAGE, text: text })

export default store;