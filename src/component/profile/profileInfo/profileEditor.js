import React from 'react';
import withField from "../../common/hoc/withField";
import {Field, reduxForm} from "redux-form";

const Input = withField('input');
const Textarea = withField('textarea');

const ProfileEditor = ({handleSubmit}) => {
  return(
    <form onSubmit={handleSubmit}>
      <h2>Редактировать</h2>
      <div>
        Введите ваше полное имя
        <Field name="fullName" component={Input}/>
      </div>
      <div>
        О вас
        <Field name="aboutMe" component={Textarea}/>
      </div>
      <div>
        Вы ищите работу ?
        <Field name="lookingForAJob" type="checkbox" component={Input}/>
      </div>
      <div>
        Описание о работе
        <Field name="lookingForAJobDescription" component={Textarea}/>
      </div>
      <button>send</button>
    </form>
  )
};
const ProfileEditorReduxForm = reduxForm({form: 'updateProfile', enableReinitialize : true})(ProfileEditor);

export default ProfileEditorReduxForm;