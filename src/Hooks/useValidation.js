import React,{useState} from "react";

function useValidation() {
  const [errMassage, setErrMassage] = useState({
    username: null,
    password: null,
    email: null,
  });
  const setMatchedPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setErrMassage((state) => ({
        ...state,
        password: "Passwords are not matched",
      }));
    } else {
      setErrMassage((state) => ({ ...state, password: null }));
    }
  };
  const isUserExists = (users,user) => {
    if (users.hasOwnProperty(user.username)) {
      setErrMassage((state) => ({
        ...state,
        username: "username already exists",
      }));
      return true;
    }
    return false;
  };
  return [errMassage,setErrMassage,setMatchedPassword,isUserExists];
}

export default useValidation;
