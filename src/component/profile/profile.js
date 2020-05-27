import React from 'react';
import Posts from '../posts/posts';
import ProfileInfo from './profileInfo/profileInfo';
import PostsContainer from "../posts/postsContainer";
import Loading from "../common/loading/loading";

const Profile = ({profile, status, setUpdateStatus, isOwner, updateAvatar, updateProfile}) => {
  if (!profile) return <Loading/>
    return (
        <div>
            <ProfileInfo
              updateProfile={updateProfile}
              isOwner={isOwner}
              setUpdateStatus={setUpdateStatus}
              status={status}
              profile={profile}
              updateAvatar={updateAvatar}
            />
            <PostsContainer/>
        </div>
    )
};
export default Profile
