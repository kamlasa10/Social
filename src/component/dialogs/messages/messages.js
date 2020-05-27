import React from 'react';
import s from './../dialogs.module.scss';

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
};
export default Message;