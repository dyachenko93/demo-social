import { useFormik } from 'formik';
import React from 'react';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({ profile, onSubmit, submitError }) => {
  const validate = (values) => {
    const fullNameError = required(values.fullName) || maxLengthCreator(25)(values.fullName)
    if(fullNameError)
      return { fullName : fullNameError }
    return undefined
  }
  const formik = useFormik({
    initialValues: {
      fullName: profile.fullName || '',
      lookingForAJob: profile.lookingForAJob || false,
      lookingForAJobDescription: profile.lookingForAJobDescription || '',
      aboutMe: profile.aboutMe || '',
      contacts: {
        github: profile.contacts.github || '',
        vk: profile.contacts.vk || '',
        facebook: profile.contacts.facebook || '',
        instagram: profile.contacts.instagram || '',
        twitter: profile.contacts.twitter || '',
        website: profile.contacts.website || '',
        youtube: profile.contacts.youtube || '',
        mainLink: profile.contacts.mainLink || ''
      }
    },
    validate,
    onSubmit: onSubmit
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <b>Full name:</b> 
          <Input name={'fullName'} type='text' placeholder={'Name'} formik={formik} />
        </div>
        <div>
          <b>Looking for a job:</b> 
          <Input name={'lookingForAJob'} type='checkbox' formik={formik} label='Need a job' checked={formik.values.lookingForAJob}/>
        </div>
        <div>
          <b>Professional skills:</b> 
          <Textarea name={'lookingForAJobDescription'} type='text' placeholder={'Skills'} formik={formik} />
        </div>
        <div>
          <b>About me:</b> 
          <Textarea name={'aboutMe'} type='text' placeholder={'About me'} formik={formik} />
        </div>
        <div>
          <div><b>Contacts</b></div>
          {Object.keys(profile.contacts).map(key =>
            <div key={key}>
              <b>{key}</b> 
              <Input name={'contacts.' + key} type='text' placeholder={key} formik={formik} value={formik.values.contacts[key]}/>
            </div>
          )}
        </div>
        {submitError && <div className={s.errorMessage}>{submitError}</div>}
        <div>
          <button type='submit'>save</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileDataForm