import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './_sidebar.module.scss';

const Aside = () => {
    return (
        <aside className={s.sidebar}>
            <ul className={`${s.sidebar__list} ${s.nav}`}>
                <li className={s.nav__item}>
                    <NavLink to="/profile" activeClassName={s.active} className={s.nav__link}>Profile</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="/dialogs" activeClassName={s.active} className={s.nav__link}>Messages</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="/news" activeClassName={s.active} className={s.nav__link}>News</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="/music" activeClassName={s.active} className={s.nav__link}>Music</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="/users" activeClassName={s.active} className={s.nav__link}>Find Users</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="/settings" activeClassName={s.active} className={s.nav__link}>Settings</NavLink>
                </li>
            </ul>
        </aside>
    )
}
export default Aside