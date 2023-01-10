import React, { useEffect } from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer'
import { useNavigate, useParams } from "react-router-dom"
import { compose } from "redux"

const ProfileContainer = props => {
  let navigate = useNavigate();
  let params = useParams();

  const refreshProfile = () => {
    let userId = params.userId
    if (!userId) {
      userId = props.authUserId
      if (!userId) {
        navigate("/login")
      }
    }
    props.getProfile(userId)
    props.getStatus(userId)
  }

  useEffect(() => {
    refreshProfile()
  }, [])

  useEffect(() => {
    refreshProfile();
  }, [params.userId, props.authUserId])

  return <Profile {...props}
                  isOwner={!params.userId}
                  profile={props.profile}
                  status={props.status}
                  updateStatus={props.updateStatus}
                  savePhoto={props.savePhoto} />
}

let mapStateToProps = (state) => ({
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  // withAuthRedirect
)(ProfileContainer)