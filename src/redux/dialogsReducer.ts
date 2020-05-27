const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let maxId:number = 100;

type dialogType = {
  id: number
  name: string
}

type messageType = {
  id: number
  message: string
}

const initialState = {
  dialog: [
    {
      id: 1,
      name: 'vasya',
    },
    {
      id: 2,
      name: 'Petya',
    },
    {
      id: 3,
      name: 'Sawko',
    },
  ] as Array<dialogType>,
  messages: [
    {
      id: 1,
      message: 'hello bro',
    },
    {
      id: 2,
      message: 'Sup',
    },
    {
      id: 3,
      message: 'yo',
    },
    {
      id: 4,
      message: 'i have bolwe yoyoyo',
    },
  ] as Array<messageType>,
};

export type initialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any):initialStateType => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const messagesData = {
        id: maxId++,
        message: action.message
      };
      return  {
        ...state,
        messages: [...state.messages, messagesData]
      };
    default:
      return state;

  }
};

type addMessageType = {
  type: typeof ADD_NEW_MESSAGE,
  message: string
}

export const addMessage = (message: string):addMessageType => ({type: ADD_NEW_MESSAGE, message});

export default dialogsReducer;