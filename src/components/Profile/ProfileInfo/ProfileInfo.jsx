import React, { useState } from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/images/user.jpg'
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false)
  let [errorEditProfile, setErrorEditProfile] = useState('')
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const editProfile = async (values) => {
    saveProfile(values).then(() => {
      setEditMode(false)
    }).catch(err => {
      setErrorEditProfile(err)
    })
  }

  return (
    <div>
      {/* <div className={s.bgImg}>
        <img src='data:image/jpeg;base64,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' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img className={s.profileImage} src={profile.photos.large ? profile.photos.large : defaultAvatar} alt={'avatar'} />
        {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
        <ProfileStatus status={status} updateStatus={updateStatus} />
        {editMode 
          ? <ProfileDataForm onSubmit={editProfile} profile={profile} submitError={errorEditProfile} /> 
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} /> 
        }
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skils:</b> {profile.lookingForAJobDescription}
        </div>
      }
      <div><b>About me:</b> {profile.aboutMe}</div>
      <div>
        <h3>Contacts</h3>
        {Object.keys(profile.contacts).map(key =>
          <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        )}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return contactValue 
    ? <div className={s.contact}>
        <a href={contactValue}>{contactTitle}</a>
      </div>
    : null
}

export default ProfileInfo;