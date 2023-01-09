import React from 'react';
import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';

const LoginForm = ({onSubmit, authError,captchaUrl}) => {
  const validate = (values) => {
    const loginError = required(values.login)
    const passError = required(values.password)
    const captchaError = captchaUrl && required(values.captcha)
    if(loginError || passError || captchaError)
      return { login : loginError, password: passError, captcha: captchaError }
    return undefined
  }
  const formik = useFormik ({
    initialValues: {
      login: '',
      password: '',
      captcha: ''
    },
    validate,
    onSubmit: onSubmit
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input name={'login'} type='text' placeholder={'Login'} formik={formik}  />
      </div>
      <div>
        <Input name={'password'} type='password' placeholder={'Password'} formik={formik}  />
      </div>
      <div>
        <Input name={'rememberMe'} type='checkbox' formik={formik} label='Remember Me'/>
      </div>
      {captchaUrl && <>
          <img src={captchaUrl} alt='captcha' />
          <div>
            <Input name={'captcha'} type='text' formik={formik} />
          </div>
        </>
      }
      {authError &&
        <div className={s.formSummaryError}>
          {authError}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const Login = (props) => {
  const loginUser = (formData) => {
    let { login, password, rememberMe, captcha } = formData
    props.login(login, password, rememberMe, captcha)
  }

  if (props.state.isAuth) return <Navigate to={'/profile'} />

  return <div>
    <h1>LOGIN</h1>
    <LoginForm authError={props.state.authError} captchaUrl={props.state.captchaUrl} onSubmit={loginUser} />
  </div>
}

export default Login