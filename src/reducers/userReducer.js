import {
  GET_USERS,
  ADD_USER,
  EDIT_USER,
  REMOVE_USER
} from "../actions/actionTypes";

const initialState = {
  allUsers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload]
      };
    case EDIT_USER:
      return {
        ...state,
        allUsers: state.allUsers.map((item, index) => {
          if (item.id === action.userId) {
            return action.payload;
          }
          return item;
        }),
        currUser: action.payload
      };
    case REMOVE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};
