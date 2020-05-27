import React from 'react';
import Posts from "./posts";
import {connect} from "react-redux";
import {addPostMessage} from "../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts
  }
}

export default connect(mapStateToProps, {addPostMessage})(Posts);