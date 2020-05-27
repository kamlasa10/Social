import React, {useEffect, useState, useRef} from 'react';
import {connect} from "react-redux";
import {getProfile, getUserStatus, setUpdateStatus, updateAvatar, updateProfile} from "../../redux/profileReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Profile from "./profile";
import {setProfileAuth} from "../../redux/authReducer";
import { StateType } from '../../redux/store';
import { avatarType } from '../types/types';

const ProfileContainer = ({profile, getProfile, setProfileAuth, auth, status, getUserStatus, setUpdateStatus, isOwner, updateAvatar, updateProfile, ...props}) => {

  useEffect(() => {
    if(auth) {
      profileLoading()
    } else {
      // @ts-ignore
      props.history.push('/login');
    }

  }, [props.userId]);

  const profileLoading = () => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.userId;
    }
    getProfile(userId);
    setProfileAuth()
  };
  const {params:{userId}} = props.match;
  return (
    <React.Fragment>
      <Profile
        updateProfile={updateProfile}
        isOwner={userId}
        setUpdateStatus={setUpdateStatus}
        status={status}
        profile={profile}
        updateAvatar={updateAvatar}
      />
    </React.Fragment>
  )
};
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.userProfile,
    userId: state.auth.userId,
    auth: state.auth.auth,
    status: state.profile.status,
  }
};

export default compose(
  connect(mapStateToProps, {getProfile, setProfileAuth, getUserStatus, setUpdateStatus, updateAvatar, updateProfile}),
  withRouter
)(ProfileContainer);
