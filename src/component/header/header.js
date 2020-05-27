import React from 'react';
import s from './_heade.module.scss';
import {NavLink} from "react-router-dom";

const Header = ({auth, login, logoutUserAuth}) => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_nAQnfbl8yQ96ZKeUdOrkQe7pz5l60sESiUm-pg8nF-x9DOMBA&s"
          alt="Логотип"/>
      </div>
      <div className={s.user_block}>
        {auth ? <div>{login} - <button onClick={logoutUserAuth}>logout</button></div> : <NavLink to={'/login'}>login</NavLink>}
      </div>
    </header>
  )
}
export default Header;