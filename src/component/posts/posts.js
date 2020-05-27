import React from 'react';
import s from './_posts.module.scss';
import Post from './post/post';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utilits/utilits";
import withField from "../common/hoc/withField";
import ItemForm from "../common/formSend/itemForm";
import {addPostMessage} from "../../redux/profileReducer";

const maxLength10 = maxLength(10);

const Posts = (props) => {

  const addPost = (value) => {
    props.addPostMessage(value.postsMessage);
    value.postsMessage = '';
  }

  return (
    <div className={s.posts}>
      <h2 className={s.posts__title}>
        My Posts
      </h2>
      {
        props.posts.map((post) => {
          return <Post  key={post.id} message={post.message} />
        })
      }
      <ItemFormRedux onSubmit={addPost} fieldName="postsMessage" />
    </div>
  )
};

const ItemFormRedux = reduxForm({form: 'posts'})(ItemForm);

export default Posts