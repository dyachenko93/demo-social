import React from 'react';
import s from './../Dialogs.module.css';

const Message = props => {
  return (
    <div className={s.message +
      (props.state.isUnread ? ' ' + s.unreadMessage : '') +
      (props.state.isMy ? ' ' + s.myMessage : '')}
    >{props.state.text}</div>
  )
}

export default Message;