import React, { useEffect, useState } from 'react';
// import s from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
  
  // const stateWithSetState = useState(false)
  // const editMode = stateWithSetState[0]
  // const setEditMode = stateWithSetState[1]
  const [ editMode, setEditMode ] = useState(false)
  const [ status, setStatus ] = useState(props.status || "-----------")

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => setEditMode(true)
  const changeStatus = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className='teestestestr'>
      {!editMode ?
        <div>
          <b>Status: </b>
          <span onDoubleClick={activateEditMode}>{props.status || "No Status"}</span>
        </div>
        :
        <div>
          <input onChange={onStatusChange} onBlur={changeStatus} autoFocus={true} value={status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatus;