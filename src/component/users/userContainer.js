import React, {useEffect, useState} from 'react';
import {
  followUser,
  getUsers,
  setCurrentPage,
  SetIsLoading,
 unFollowUser,
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {usersApi} from "../../api/samuraiApi";
import Users from "./users";
import s from './_users.module.scss'
import Loading from "../common/loading/loading";

const UsersContainer = ({page, users, followed, count, totalCount, setCurrentPage, isLoading, ...props}) => {

  useEffect(() => {
    props.SetIsLoading(true);
    props.getUsers(page, count);
    props.SetIsLoading(false);
  }, [page]);

  if(isLoading) return <Loading/>;

  return (
    <div className={s.user_wrapper}>
      <Users
        users={users}
        totalCount={totalCount}
        count={count}
        page={page}
        setCurrentPage={setCurrentPage}
        followUser={props.followUser}
        unFollowUser={props.unFollowUser}
      />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    page: state.users.page,
    count: state.users.count,
    users: state.users.items,
    totalCount: state.users.totalCount,
    isLoading: state.users.isLoading,
    followed: state.users.followed
  }
}

export default connect(mapStateToProps, {getUsers, setCurrentPage, SetIsLoading, followUser, unFollowUser})(UsersContainer)