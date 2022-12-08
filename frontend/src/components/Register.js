import React, { useState } from 'react'
import { FormSection } from "./GlobalStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Register = () => {
    const [ username, setUsername] = useState("")
    const [ password, setPassword ] = useState("")
    
    return (
    <FormSection>  
        <PageHeader>Register</PageHeader>
        <Form>
            <Input 
            id='username' 
            type="text" 
            value={username}
            placeholder="Choose username"
            onChange={(e) => setUsername(e.target.value)}/>
            <Input 
            id="password"
            type="password" 
            value={password}
            placeholder="Choose password"
            onChange={(e) => setPassword(e.target.value)}/>
        </Form>
        <Button type="submit">Create account</Button>
        <Text>Already a user?</Text>
        <ButtonLink to="/login">Log in</ButtonLink>
    </FormSection>
    )
}
export const Text = styled.p`
font-weight: 600;

@media (min-width: 800px) {
    font-size:20px;
  }`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const ButtonLink = styled(Link)`
 color: black;
 transition: ease-out 0.2s;
 cursor: pointer;
 font-size: 15px;
 text-decoration: none;
 padding: 10px 15px;
 border-radius: 5px;
 box-shadow: 0px 0px 7px 0px #888888;
 background-color: #ECB390;

&:hover {
    transform: scale(1.1);
  }

  @media (min-width: 800px) {
    margin-bottom: 20px;
    font-size:17px;
  }
` 
export const Input = styled.input`
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  transition: ease-out 0.2s;
  border: 1px solid black;
  min-width: 50vw;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 800px) {
  min-width: 30vw;
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
  font-weight: 400;

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