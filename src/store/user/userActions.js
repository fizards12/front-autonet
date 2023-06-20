import { LOGGEDIN, ADD_USER } from "./actionTypes";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const loggedin = (isLogged)=> ({
    type: LOGGEDIN,
    payload: isLogged
})