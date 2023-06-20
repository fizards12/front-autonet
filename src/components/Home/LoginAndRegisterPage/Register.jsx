import { Button } from "react-bootstrap";
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { Alert, Carousel, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { addUser } from "../../../store";
import { connect } from "react-redux";
import useValidation from "../../../Hooks/useValidation";
const Register = ({ users, register }) => {
  
  const navigate = useNavigate();
  
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    position: "",
  });
  const [index, setIndex] = useState(0);

  const [errMassage,setErrMassage,setMatchedPassword,isUserExists] = useValidation();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isUserExists(users,newUser)) {
      register(newUser);
      setErrMassage((state) => ({ ...state, username: null }));
      navigate("/auth/login");
      alert(`${newUser.firstname + ' ' + newUser.lastname } has signed up successfully`);
    }
  };
  const onChange = (e) =>
    setNewUser((state) => ({ ...state, [e.target.name]: e.target.value }));

  const setNextSlide = (e) => setIndex((index) => index + 1);
  const setPreviousSlide = (e) => setIndex((index) => index - 1);

  useEffect(() => {
    setMatchedPassword(newUser.password, newUser.confirmPassword);
  },[newUser]);
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Carousel
          interval={null}
          indicators={false}
          controls={false}
          activeIndex={index}
        >
          <Carousel.Item>
            <Form.Group className={`my-2`}>
              <Form.Label htmlFor="firstname">Firstname</Form.Label>
              <Form.Control
                id={"firstname"}
                name="firstname"
                type={"firstname"}
                onChange={onChange}
                placeholder={"Firstname"}
              />
            </Form.Group>
            <Form.Group className={`my-2`}>
              <Form.Label htmlFor="lastname">Lastname</Form.Label>
              <Form.Control
                id={"lastname"}
                name="lastname"
                type={"lastname"}
                onChange={onChange}
                placeholder={"Lastname"}
              />
            </Form.Group>
            <Form.Group className={`my-2`}>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id={"email"}
                name="email"
                type={"email"}
                onChange={onChange}
                placeholder={"Enter Email"}
              />
            </Form.Group>
            <Form.Group className={`my-2`}>
              <Form.Label htmlFor="position">Position</Form.Label>
              <Form.Control
                id={"position"}
                name="position"
                type={"position"}
                onChange={onChange}
                placeholder={"Position"}
              />
            </Form.Group>
          </Carousel.Item>
          <Carousel.Item>
            <Form.Group className={`my-2`}>
              <Form.Label htmlFor="create-username">Username</Form.Label>
              <Form.Control
                id={"create-username"}
                name="username"
                type={"textbox"}
                onChange={onChange}
                placeholder={"Username"}
              />
            </Form.Group>
            <Form.Group className={`my-2`}>
              <Form.Label htmlFor="create-password">Password</Form.Label>
              <Form.Control
                id={"create-password"}
                name="password"
                type={"password"}
                onChange={onChange}
                placeholder={"Password"}
              />
            </Form.Group>
            <Form.Group className={`my-2`}>
              <Form.Label htmlFor="confirm-password">
                Confirm Password
              </Form.Label>
              <Form.Control
                id={"confirm-password"}
                type={"password"}
                name="confirmPassword"
                onChange={onChange}
                placeholder={"Confirm Password"}
              />
              {errMassage.password && (
                <Alert className="my-2 py-2" variant="danger">
                  {errMassage.password}
                </Alert>
              )}
            </Form.Group>
          </Carousel.Item>
        </Carousel>

        <div className="w-100 d-flex justify-content-center">
          {index !== 0 ? (
            <>
              <Form.Control
                className={`bg-dark text-white my-2`}
                value={"Sign Up"}
                type={"submit"}
                id={"Create"}
              />
              <Button
                className={`bg-primary text-white my-2`}
                id={"previous"}
                onClick={setPreviousSlide}
              >
                Previous
              </Button>
            </>
          ) : (
            <Button
              className={`bg-primary text-white my-2`}
              id={"next"}
              onClick={setNextSlide}
            >
              Next
            </Button>
          )}
        </div>
        {errMassage.username && (
                <Alert className="my-2 py-2" variant="danger">
                  {errMassage.username}
                </Alert>
              )}
      </Form>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
