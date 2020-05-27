import React from 'react';
import s from './../dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={` ${s.dialog} ${s.active}`}>
            <img className={s.dialog__avatar} src="https://ribashotelsgroup.ua/img/avatars/user.png" alt="Аватар"/>
            <NavLink to={'dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};
export default DialogItem;