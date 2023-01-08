import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { useFormik } from 'formik'
import { Textarea } from '../common/FormsControls/FormsControls'

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.formik.handleSubmit}>
      <div>
        <Textarea 
          name='message' 
          id='message' 
          formik={props.formik} 
          placeholder='Enter your message' />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

const Dialogs = props => {
  const maxLength50 = maxLengthCreator(50)
  const validate = (values) => {
    const errors = required(values.message) || maxLength50(values.message)
    if(errors)
      return { message: errors }
    return undefined
  }
  
  let sendMessage = (formData) => {
    props.sendMessage(formData.message)
    formik.resetForm()
  }

  const formik = useFormik ({
    initialValues: {
      message: ''
    },
    validate,
    onSubmit: sendMessage
  })

  if (!props.isAuth) return <Navigate to='/login' />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.state.dialogs.map((dialog, i) =>
          <DialogItem key={"dialog_" + i} state={dialog} />
        )}
      </div>
      <div className={s.messages}>
        {props.state.messages.map((message, i) =>
          <Message key={"message_" + i} state={message} />
        )}
        <NewMessageForm formik={formik} />
      </div>
    </div>
  )
}

export default Dialogs