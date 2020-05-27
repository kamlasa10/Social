// @ts-ignore
import {stopSubmit} from "redux-form";
// @ts-ignore
import {authApi} from "../api/samuraiApi";

const initialState = {
  login: null as string | null,
  email: null as string | null,
  userId: null as number | null,
  auth: false as boolean,
  captcha: null as string | null
};

type initialStateType = typeof initialState;

const SET_AUTH = 'SET_AUTH';
const LOGOUT_AUTH = 'LOGOUT_AUTH';
const GET_CAPTCHA = 'GET_CAPTCHA';

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.data,
      };
    case LOGOUT_AUTH:
      return  {
        login: null,
        email: null,
        userId: null,
        auth: false,
        captcha: null
      };
    case GET_CAPTCHA:
      return  {
        ...state,
        captcha: action.src
      }
    default:
      return state;
  }
};

type dataType = {
  userId: number,
  email: string,
  login: string,
  auth: boolean
}

type setAuthType = {
  type: typeof SET_AUTH,
  data: dataType
}

type logoutAuth = {
  type: typeof LOGOUT_AUTH
}

type getCaptchaType = {
  type: typeof GET_CAPTCHA,
  src: string
}

const setAuth = (userId: number, email: string, login: string, auth: boolean): setAuthType => ({type: SET_AUTH, data: ({userId, email, login, auth})});
const logoutAuth = ((): logoutAuth => ({type: LOGOUT_AUTH}));
const getCaptcha = (src: string): getCaptchaType => ({type: GET_CAPTCHA, src});

export const setProfileAuth = () => (dispatch: any) => {
  return authApi.me()
    .then((body: any) => {
      if (body.resultCode === 0) {
        const {id, email, login} = body.data;
        dispatch(setAuth(id, email, login, true))
      }
    })
};

export const comeLogin = (userData: any) => async (dispatch: any) => {
  const body = await authApi.login(userData);
  console.log(body)
  if(body.resultCode === 0) {
    dispatch(setProfileAuth())
  } else if(body.resultCode === 10) {
    dispatch(getSrcCaptcha())
  } else {
   const errorMessage = body.messages.length ? body.messages[0] : 'someError';
    dispatch(stopSubmit('login', {_error: errorMessage}))
  }
};
export const logoutUserAuth = () => async (dispatch: any) => {
  const body = await authApi.logout();
  if(body.resultCode === 0) {
    dispatch(logoutAuth());
  }
};

const getSrcCaptcha = () => async (dispatch: any) => {
  const body = await authApi.captcha();
  dispatch(getCaptcha(body.url));
}

export default authReducer;