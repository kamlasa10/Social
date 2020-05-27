import {usersApi} from "../api/samuraiApi";
import {avatarType} from "../component/types/types";

type userType = {
  folowed: boolean,
  id: number,
  name: string,
  photos: avatarType,
  status: null | string,
  uniqueUrlName: null | string
}

const initialState = {
  items: [] as Array<userType>,
  count: 5,
  page: 1,
  totalCount: null as number | null,
  isLoading: false,
};

type initialStateType = typeof initialState

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_UNFOLLOW = 'SET_UNFOLLOW';
const SET_FOLLOW = 'SET_FOLLOW';

const usersReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USERS:
      return  {
        ...state,
        items: [...action.users] as Array<userType>,
        totalCount: action.totalCount
      };
    case SET_CURRENT_PAGE:
      return  {
        ...state,
        page: action.page,
      };
    case SET_FOLLOW:
      return  {
        ...state,
        items: state.items.filter((item: any) => {
          if(item.id !== action.userId) {
            return {...item, followed: true};
          }
        })
      };
    case SET_UNFOLLOW:
      return  {
        ...state,
        items: state.items.filter((item: any) => {
          if(item.id !== action.userId) {
            return {...item, followed: false};
          }
        })
      }
  }
  return state;
};

type takeUsersActionType = {
  type: typeof SET_USERS,
  users: any,
  totalCount: number
}

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  page: number
}

type SetIsLoadingActionType = {
  type: typeof SET_IS_LOADING,
  loading: boolean
}

type setUnFollowActionType = {
  type: typeof SET_UNFOLLOW
}

type setFollowActionType = {
  type: typeof SET_FOLLOW
}

export const takeUsers = (users: any, totalCount: number): takeUsersActionType => ({type:SET_USERS, users, totalCount});
export const setCurrentPage = (page: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, page});
export const SetIsLoading = (loading: boolean): SetIsLoadingActionType => ({type: SET_IS_LOADING, loading});
export const setUnFollow = (userId: number) => ({type: SET_UNFOLLOW});
export const setFollow = (userId: number) => ({type: SET_FOLLOW});

export const getUsers = (page: number, count: number) => async (dispatch: any) => {
  try {
    let body = await usersApi.getUsers(page, count);
    dispatch(takeUsers(body.items, body.totalCount))
  } catch (e) {
    console.log(e)
  }
};

export const followUser = (id: number) => async (dispatch: any) => {
  const body = await usersApi.follow(id);
  if(body.resultCode === 0) {
    dispatch(setFollow(id))
  }
};
export const unFollowUser = (id: number) => async (dispatch: any) => {
  const body = await usersApi.unFollow(id);
  if(body.resultCode === 0) {
    dispatch(setUnFollow(id))
  }
}

export default usersReducer;