import React from 'react';
import withField from "../component/common/hoc/withField";
import {required} from "../utilits/utilits";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import styles from './login.module.scss'

const InputText = withField('input');

const Login = ({comeLogin, auth, captcha}) => {

  const onSubmitForm = (data) => {
    console.log(data)
    comeLogin(data)
  };

  if (auth) return <Redirect to="/profile"/>;

  return (
    <React.Fragment>
      <h2>Login</h2>
      <LoginFormRedux captcha={captcha} onSubmit={onSubmitForm}/>
    </React.Fragment>
  )
};
const LoginForm = ({handleSubmit, error, captcha}) => {
  return (
    <form onSubmit={handleSubmit}>
      {error &&
      <div className={styles.error_message}>
        {error}
      </div>
      }
      <div>
        <Field name="email" type="text" placeholder="enter you email" component={InputText} validate={[required]}/>
        <Field name="password" type="password" placeholder="enter you password" component={InputText}
               validate={[required]}/>
        <div>
          <Field name="rememberMe" type="checkbox" component={InputText}/>
          Remember me
        </div>
        {captcha && <img src={captcha} alt="Img"/>}
        {captcha && <Field name="captcha" type="text" component={InputText} validate={[required]}/>}
        <button>send</button>
      </div>
    </form>
  )
};

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

export default Login;