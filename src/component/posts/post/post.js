import React from 'react';
import classes from './_post.module.scss';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img src="https://www.verasport.pl/pub/skin/default-skin/img/avatar.png" alt="Аватар"/>
      <div className={classes.post__desc}>
        {props.message}
      </div>
    </div>
  )
}
export default Post