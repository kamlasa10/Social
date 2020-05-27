import React from 'react';
import styles from './_users.module.scss';
import {NavLink} from "react-router-dom";
import s from "../profile/profileInfo/_profileInfo.module.scss";
import {unFollowUser} from "../../redux/usersReducer";
import {usersApi} from "../../api/samuraiApi";

let Users = (props) => {
  const totalPage = Math.ceil(props.totalCount / props.count);

  let pageCount = [];

  for (let i = 0; i < totalPage; i++) {
    pageCount.push(i + 1)
  }

  return <div className={styles.users}>

    <div className={styles.pagination}>
      {
        pageCount.map((p, index) => {

          if (p === 1 || (p >= props.page - 2 && p <= props.page + 2)) {
            return (
              <span className={props.page === p ? styles.current : ''} onClick={() => props.setCurrentPage(p)}
                    key={index}>{p}</span>
            )
          }
        })
      }
    </div>

    {
      props.users.map((u) => {
        return (
          <div key={u.id} className={styles.users__item}>
            <div className={styles.users__avatar}>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : 'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png'}
                    width="100" alt="Аватар"/>
                </NavLink>
              </div>
              {u.followed ? <button onClick={() => props.unFollowUser(u.id)} className={s.btn}>Unfollow</button>
                : <button onClick={() => props.followUser(u.id)} className={s.btn}>follow</button>
              }
            </div>
            <div className={styles.users__content}>

              <div className={styles.users__about}>
                <div>
                  {u.name}
                </div>
                <div>
                  'u.location.country' <br/>
                  <div>
                    'u.location.city'
                  </div>
                </div>
              </div>
              <div className={styles.users__status}>
                {u.status}
              </div>
            </div>
          </div>
        )
      })
    }
  </div>
}

export default Users;