import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, text: 'How are you?', likesCount: 23 },
    { id: 2, text: 'It`s my first post', likesCount: 43 },
    { id: 3, text: 'React post', likesCount: 25 },
    { id: 4, text: 'Test post', likesCount: 18 },
    { id: 5, text: 'Long message for testing layout', likesCount: 5 }
  ]
}
it('length of posts should increase', () => {
  //1. test data
  let action = addPostCreator('first post adding test')
  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(6)
})

it('message of new post should be correct', () => {
  //1. test data
  let action = addPostCreator('first post adding test')
  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts[5].text).toBe("first post adding test")
})

it('after deleting length of posts should decrement', () => {
  //1. test data
  let action = deletePost(1)
  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(4)
})

it('after deleting shouldn\'t be decrement if id is Incorrect', () => {
  //1. test data
  let action = deletePost(1000)
  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(5)
})