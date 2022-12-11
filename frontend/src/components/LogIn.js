import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from './utils/constants';
import user from './reducers/user';
import styled from "styled-components";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken])

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    }
    fetch(API_URL(mode), options)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setUserId(data.response.userId))
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setUserId(null))
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
            window.alert(data.response)
          });
        }
      })
  }
    return (
      <FormSection>
        <PageHeader>Welcome!</PageHeader>
        <SignupSignin>
        <label htmlFor="Sign-Up">Do you wish to create an account? Sign up!</label>
          <input
          type="radio"
          id="register"
          checked={mode === "register"}
          onChange={() => setMode("register")}
          />
          </SignupSignin>
          <SignupSignin>
          <label htmlFor="Sign-In"> Already have an account? Sign in!</label>
            <input
            type="radio"
            id="login"
            checked={mode === "login"}
            onChange={() => setMode("login")}
            />
          </SignupSignin>
          <FormSubmit onSubmit={onFormSubmit}>
            <Label htmlFor="username">Username: </Label>
            <Input
              type="text"
              id="username"
              value={username}
              required
              placeholder="My username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label htmlFor="password">Password: </Label>
            <Input
              type="password"
              id="password"
              value={password}
              required
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />  
          <Button type="submit">Submit</Button>
        </FormSubmit>
    </FormSection>
    );
}

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const FormSubmit = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center`

export const Text = styled.p`
font-weight: 600;

@media (min-width: 800px) {
    font-size:20px;
}`

export const Label = styled.label`
font-weight: 600;`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const SignupSignin = styled.div`
  padding: 1px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  border-radius: 3px;
  padding: 2px;
  margin: 5px;
  transition: ease-out 0.2s;
  border: 1px solid black;
  min-width: 50vw;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 800px) {
  min-width: 20vw;
  padding: 7px;
  }
`
export const Button = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border: 0px;
  transition: ease-out 0.2s;
  background-color: #ECB390;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px #888888;
  font-size: 15px;
  font-weight: 600;
  text-align: center;

&:hover {
    transform: scale(1.05);
  }

  @media (min-width: 800px) {
    margin: 30px;
    font-size:17px;
  }
`
export const PageHeader = styled.h1`
    font-size: 25px;
    margin: 20px;

  @media (min-width: 800px) {
    font-size: 30px;
  }
`