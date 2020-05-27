// @ts-ignore
import {profileApi} from '../api/samuraiApi'
import {avatarType, postType} from "../component/types/types";


type contactsType = {
  facebook: string,
  github: string,
  instagram: string,
  mainLink: null | string,
  twitter: string,
  vk: string,
  website: null | string,
  youtube: null | string
}

type userProfileType = {
  aboutMe: string,
  contacts: contactsType,
  "lookingForAJob": boolean,
  "lookingForAJobDescription": string,
  "fullName": string,
  photos: avatarType
}

const initialState = {
  posts: [
    {
      id: 1,
      message: 'have you'
    },
    {
      id: 2,
      message: 'work'
    },
    {
      id: 3,
      message: 'or not'
    },
  ] as Array<postType>,
  userProfile: null as userProfileType | null,
  status: ''
};

type initialStateType = typeof  initialState;

const ADD_POST_MESSAGE = 'ADD_POST_MESSAGE';
const GET_PROFILE = 'GET_PROFILE';
const SET_IS_LOADING_PROFILE = 'SET_IS_LOADING_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const UPDATE_USER_AVATAR = 'UPDATE_USER_AVATAR';
let maxId: number = 100;

const profileReducer = (state = initialState, action: any):initialStateType => {
  switch (action.type) {
    case ADD_POST_MESSAGE:
      let newPost = {
        id: maxId++,
        message: action.message
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case GET_PROFILE:
      return {
        ...state,
        userProfile: action.profile
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.statusText
      };
    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status
      };
    case UPDATE_USER_AVATAR:
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.avatar} as userProfileType
      };
    default:
      return state;
  }
};

type addPostMessageType = {
  type: typeof ADD_POST_MESSAGE,
  message: string
}

type getUsersProfileType = {
  type: typeof GET_PROFILE,
  profile: userProfileType
}

type setUserStatusType = {
  type: typeof SET_USER_STATUS,
  statusText: string
}

type updateUserStatusType = {
  type: typeof UPDATE_USER_STATUS,
  status: string
}

type updateUserAvatarType = {
  type: typeof UPDATE_USER_AVATAR,
  avatar: avatarType
}

export const addPostMessage = (message: string): addPostMessageType => ({type: ADD_POST_MESSAGE, message});
export const getUsersProfile = (profile: userProfileType) => ({type: GET_PROFILE, profile});
export const setUserStatus = (statusText: string): setUserStatusType => ({type: SET_USER_STATUS, statusText});

export const updateUserStatus = (status: string): updateUserStatusType => ({type: UPDATE_USER_STATUS, status});
export const updateUserAvatar = (avatar: avatarType): updateUserAvatarType => ({type: UPDATE_USER_AVATAR, avatar});

export const getProfile = (id: number) => async (dispatch: any) => {
  const body = await profileApi.getProfile(id);
  dispatch(getUsersProfile(body));
  dispatch(getUserStatus(id))
};
export const updateProfile = (data: userProfileType) => async (dispatch:any, getState:any) => {
  const userId = getState().auth.userId;
  const body = await profileApi.updateProfile(data);
  if(body.resultCode === 0) {
    dispatch(getProfile(userId))
  }
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const body = await profileApi.getUserStatus(userId);
  dispatch(setUserStatus(body));
};
export const setUpdateStatus = (status: string) => async (dispatch: any) => {
  const body = await profileApi.updateUserStatus(status);
  if (body.resultCode === 0) {
    dispatch(updateUserStatus(status));
  }
};
export const updateAvatar = (avatar: avatarType) => async (dispatch: any) => {
  const body = await profileApi.updateAvatar(avatar);
  if (body.resultCode === 0) {
    dispatch(updateUserAvatar(body.data.photos))
  }
};


export default profileReducer;