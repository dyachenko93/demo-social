import React from "react"
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"

let User = ({ user, isFetchingProcessing, follow, unfollow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img className={s.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt={'avatar'} />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={isFetchingProcessing.some(id => id === user.id)}
              onClick={() => unfollow(user.id)}
            >Unfollow</button>
            : <button disabled={isFetchingProcessing.some(id => id === user.id)}
              onClick={() => follow(user.id)}
            >Follow</button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{user.uniqueUrlName}</div>
          <div>{user.id}</div>
        </span>
      </span>
    </div>
  )
}

export default User