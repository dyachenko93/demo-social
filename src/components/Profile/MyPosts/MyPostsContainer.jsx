import { addPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (test) => {dispatch(addPostCreator(test))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer