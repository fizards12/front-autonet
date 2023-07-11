import { LOGGEDIN, ADD_USER } from "./actionTypes";
const initialState = {
  admin: {
    firstname: "mahmoud",
    lastname: "sameh",
    position: "administrator",
    username: "admin",
    password: "admin",
    email: "mahmoudsameh734@gmail.com",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        [action.payload.username]: action.payload,
      };
    case LOGGEDIN:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
