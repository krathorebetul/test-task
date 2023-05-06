import {LOAD_USER_DATA,SUBMIT_USER_DATA} from './actionTypes';
const INIT_STATE = {
  loadUser: [],
  saveUser:[]
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUBMIT_USER_DATA:
      return { ...state, saveUser: action.payload };
      case LOAD_USER_DATA:
        return { ...state, loadUser: action.payload };
  

    default:
      return state;
  }
};
