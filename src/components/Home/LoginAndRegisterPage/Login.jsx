import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../store/status/statusReducer";

const Login = ({users , login}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errMassage, setErrMassage] = useState({
    username: null,
    password: null,
  });

  const onChange = (e) => {
    setUser((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const isAuthenticated = (user) => {
    const storedUser = users[user.username];
    if (storedUser !== undefined) {
      if (storedUser.password === user.password) {
        setErrMassage(() => ({ username: null, password: null }));
        return true
      } else {
        setErrMassage({ username: null, password: 'Please Type The Correct Password' });
        return false
      }
    } else {
      setErrMassage({ username: 'user not found', password: null });
      return false
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated(user)){
      login(users[user.username]);
      navigate("/home");
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className={`my-2`}>
          <Form.Label htmlFor="auth-username">Username</Form.Label>
          <Form.Control
            id={"auth-username"}
            name="username"
            type={"textbox"}
            placeholder={"Username"}
            onChange={onChange}
            value={user.username}
          />
          {errMassage.username && <Alert className="my-2 py-2" variant="danger">{errMassage.username}</Alert>}
        </Form.Group>
        <Form.Group className={`my-2`}>
          <Form.Label htmlFor="auth-password">Password</Form.Label>
          <Form.Control
            id={"auth-password"}
            name="password"
            type={"password"}
            placeholder={"Password"}
            onChange={onChange}
            value={user.password}
          />
          {errMassage.password && <Alert className="my-2 py-2" variant="danger">{errMassage.password}</Alert>}
        </Form.Group>
        <div className="w-100 d-flex justify-content-center">
          <Form.Control
            className={`bg-dark text-white my-2`}
            value={"Login"}
            type={"submit"}
            id={"authenticate"}
          />
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = dispatch =>({
  login: (user)=> dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
