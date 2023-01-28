import React, { useState } from 'react';
import styled from 'styled-components';
import eyeIcon from '../../assets/images/eyeIcon.png'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import { Link } from 'react-router-dom';



const Login = () => {
    const [form,setForm]=useState({username:'',password:'',checked:false})

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
       
        setForm({...form,[name]:value})
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
    }


  return (

    <FormPageContainer>
        <FormContainer>
        <LoginForm>
         <FormHeader>Sign in</FormHeader>
         <FormContent>
            <FormLabel>Username</FormLabel>
            <FormInput placeholder='Email or phone' name='username' value={form.username} onChange={handleChange}></FormInput>
         </FormContent>
         <FormContent>
            <FormLabel>Password</FormLabel>
            <FormInput placeholder='Type here' type="password" name='password' value={form.password} onChange={handleChange}></FormInput>
            <FormForget>Forgot Password</FormForget>
            <FormImage src={eyeIcon}></FormImage>
         </FormContent>
         <FormContentChecbox>
            <FormInputCheckbox type="checkbox" name='checked' value={form.checked} onChange={handleChange}></FormInputCheckbox>
            <FormLabel>Remember me</FormLabel>
         </FormContentChecbox>
         <FormButton type='submit' onClick={handleSubmit}>Log In</FormButton>
         <FormOr>Or</FormOr>
         <ButtonContainer>
            <ButtonImage src={google}></ButtonImage>
            <Button color={(props)=> props.theme.pallet.black2} bgcolor={(props)=> props.theme.pallet.white}>Continue with Google</Button>
         </ButtonContainer>
         <ButtonContainer>
            <ButtonImage src={facebook}></ButtonImage>
            <Button color={(props)=> props.theme.pallet.white} bgcolor={(props)=> props.theme.pallet.blue2}>Continue with Facebook</Button>
         </ButtonContainer>
        </LoginForm>
        <FormFooter>
            <FormFooterHeader>Don’t have an account?</FormFooterHeader>
            <Link to="/register">Register now</Link>
         </FormFooter>
        </FormContainer>
        
    </FormPageContainer>


  )
}

const FormPageContainer =styled.div`
min-width:100vw;
height: 100vh;
background-color:${(props)=> props.theme.pallet.bgmain};
display: flex;
justify-content: center;
align-items: center;
`
const FormContainer =styled.div`
min-width: 387px;
min-height:400px;
background-color:${(props)=> props.theme.pallet.white};
box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
border-radius: 6px;
`
const LoginForm =styled.form`
padding: 30px;
`
const FormHeader =styled.h3`
font-style: normal;
font-weight: 600;
font-size: 24px;
color: ${(props)=> props.theme.pallet.black1};
`
const FormContent =styled.div`
display:flex;
flex-direction: column;
margin:17px 0;
position: relative;

`

const FormLabel =styled.label`
font-weight: 400;
font-size: 16px;
color: ${(props)=> props.theme.pallet.black1};
margin:3px 0;

`
const FormInput =styled.input`
height: 40px;
background:${(props)=> props.theme.pallet.white};
border: 1px solid #E0E0E0;
border-radius: 6px;
padding-left: 10px;


&::placeholder{
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: ${(props)=> props.theme.pallet.grey1};
padding-left: 10px;
}
`
const FormImage=styled.img`
width: 20px;
height: 14px;
position: absolute;
right: 8px;
top:37px;
cursor: pointer;
`
const FormForget=styled.p`
font-weight: 400;
font-size: 13px;
line-height: 18px;
color: ${(props)=> props.theme.pallet.blue1};
position: absolute;
right: 2px;
top:4px;
cursor: pointer;
`

const FormContentChecbox=styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`

const FormInputCheckbox=styled.input`
    width: 18px;
    height:18px;

`

const FormButton=styled.button`
background: ${(props)=> props.theme.pallet.blue1};
border: 1px solid ${(props)=> props.theme.pallet.blue1};
border-radius: 6px;
height: 40px;
width: 100%;
color:${(props)=> props.theme.pallet.white};
margin-top:22px;
`

const FormOr=styled.div`
position: relative;
font-weight: 400;
font-size: 13px;
line-height: 18px;
text-align: center;
color: ${(props)=> props.theme.pallet.grey1};
margin-top: 20px;
&::after{
        content:'';
        position: absolute;
        height: 2px;
        width: 45%;
        right: 0;
        top: 50%;
        background-color: ${props => props.theme.pallet.grey2};
    }

    &::before{
        content:'';
        position: absolute;
        height: 2px;
        width: 45%;
        left: 0;
        top: 50%;
        background-color: ${props => props.theme.pallet.grey2};
    }


`
const Button=styled.button`
background: ${(props)=> props.bgcolor};
border: 1px solid ${(props)=> props.theme.pallet.grey2};
border-radius: 6px;
box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
height: 40px;
width: 100%;
color:${(props)=> props.color};
margin-top:22px;
`


const ButtonContainer=styled.div`
    position: relative;

`

const ButtonImage=styled.img`
        position: absolute;
        left: 8px;
        top:32px;
        cursor: pointer;
`

 const FormFooter=styled.div`
display: flex;
justify-content:center;
align-items: center;
gap:5px;
margin:0.1rem 0 1.5rem;

a{
    color: ${(props)=> props.theme.pallet.blue1};
    text-decoration: none;
}

`

const FormFooterHeader=styled.h3`
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: ${(props)=> props.theme.pallet.black2};
` 



export default Login;