import React from 'react';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { useFormik } from 'formik';

const maxLength50 = maxLengthCreator(50)
const validate = (values) => {
  const errors = required(values.newPost) || maxLength50(values.newPost)
  if(errors)
    return { newPost: errors }
  return undefined
}

const NewPostForm = (props) => {
  return <form onSubmit={props.formik.handleSubmit}>
      <div>
        <Textarea 
          name='newPost' 
          id='newPost' 
          formik={props.formik} 
          placeholder='Post message' />
      </div>
      <div>
        <button disabled={!props.formik.dirty || !props.formik.isValid} type='submit'>Add post</button>
      </div>
    </form>
}

const MyPosts = React.memo(props => {
  let addPost = (formData) => {
    props.addPost(formData.newPost)
    formik.resetForm()
  }

  const formik = useFormik ({
    initialValues: {
      newPost: ''
    },
    validate,
    onSubmit: addPost
  })

  let postsElements = [...props.posts].reverse().map((post, i) =>
    <Post key={"post_" + i} post={post} deletePost={props.deletePost} />
  )

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <NewPostForm formik={formik} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
})

export default MyPosts