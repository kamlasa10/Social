import {setProfileAuth} from "./authReducer";

const initialState = {
  initialization: false,
};

type initialStateType = typeof initialState;

const SET_INITIALIZATION_APP = 'SET_INITIALIZATION_APP';

const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_INITIALIZATION_APP:
      return {
        ...state,
        initialization: true
      };
    default:
      return state;
  }
};

type setInitializationAppType = {
  type: typeof SET_INITIALIZATION_APP
}

const setInitializationApp = (): setInitializationAppType => ({type: SET_INITIALIZATION_APP});

export const establishInitializationApp = () => (dispatch: any) => {
   dispatch(setProfileAuth())
   .then(() => dispatch(setInitializationApp()))
};

export default appReducer;