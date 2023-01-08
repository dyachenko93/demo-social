import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = props => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + (props.state.isActive ? ' ' + s.active : '') + (props.state.isUnread ? ' ' + s.unreadDialog : '')}>
      <NavLink to={path}>{props.state.name}</NavLink>
    </div>
  )
}

export default DialogItem;