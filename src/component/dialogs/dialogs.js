import React from 'react';
import s from './dialogs.module.scss';
import DialogItem from "./DialogItem/dialogsItem";
import Message from "./messages/messages";
import {reduxForm} from "redux-form";
import ItemForm from "../common/formSend/itemForm";

const Dialogs = ({dialogs, messages, ...props}) => {

  const addMessage = (value) => {
    props.addMessage(value.messageText);
    value.messageText = '';
  };

  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogs__items}>
          {
            dialogs.map((dialog) => {
              return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
            })
          }
        </div>
        <div className={s.messages}>
          {
            messages.map((messag) => {
              return <Message key={messag.id} message={messag.message}/>
            })
          }
        </div>
      </div>
      <FormMessageRedux fieldName="messageText" onSubmit={addMessage}/>
    </>
  )
};



const FormMessageRedux = reduxForm({form: 'message'})(ItemForm);

export default Dialogs;