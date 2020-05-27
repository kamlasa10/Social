import React from 'react';
import s from './itemForm.module.scss';
import withField from "../hoc/withField";
import {Field} from "redux-form";

const Textarea = withField('textarea')

const ItemForm = ({handleSubmit, fieldName}) => {
  return (
    <form onSubmit={handleSubmit} className={s.form_message} action="#">
      <Field name={fieldName} placeholder="enter you message" component={Textarea} />
      <button className={s.button_send}>send</button>
    </form>
  )
};
export default ItemForm;