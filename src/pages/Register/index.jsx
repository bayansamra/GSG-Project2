import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../../assets/images/arrow.png';
import { Link } from 'react-router-dom';



const Login = () => {
    const [form,setForm]=useState({name:'',surname:'',email:'',phone:'',password:'',repassword:'',terms:false})

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.terms : e.target.value;
       
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
         <FormHeader>Register</FormHeader>
            <FormContent>
            <FormContent1>
                <FormLabel>Name</FormLabel>
                <FormInput placeholder='Type here' name='name' value={form.name} onChange={handleChange}></FormInput>
                <FormLabel>Surname</FormLabel>
                <FormInput placeholder='Type here' name='surname' value={form.surname} onChange={handleChange}></FormInput>
            </FormContent1>
            </FormContent>
         <FormContent>
            <FormLabel>Your e-mail</FormLabel>
            <FormInput placeholder='example@mail.com' type="email" name='email' value={form.email} onChange={handleChange}></FormInput>
        </FormContent>
        <FormContent1>
            <FormLabel>Phone</FormLabel>
            <FormInput value='UZ +998'></FormInput>
            <FormImage src={arrow}></FormImage>
            <FormInput placeholder='00-000-00-00' name='phone' value={form.phone} onChange={handleChange}></FormInput>

         </FormContent1>
         <FormContent>
            <FormLabel>Password</FormLabel>
            <FormInput placeholder='At least 6 characters.' type="password" name='password' value={form.password} onChange={handleChange}></FormInput>
         </FormContent>
         <FormContent>
            <FormLabel>Repeat password</FormLabel>
            <FormInput placeholder='Type here' type="password" name='repassword' value={form.repassword} onChange={handleChange}></FormInput>
         </FormContent>
         <FormButton type='submit' onClick={handleSubmit}>Register now</FormButton>
         <FormContentChecbox>
            <FormInputCheckbox type="checkbox" name='terms' value={form.terms} onChange={handleChange}></FormInputCheckbox>
            <FormLabel>I agree with <FormSpan>Terms and Conditions</FormSpan></FormLabel>
         </FormContentChecbox>
        </LoginForm>
        <FormFooter>
            <FormFooterHeader>Already have an accaunt?</FormFooterHeader>
            <Link to="/">Log in</Link>
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
min-width: 300px;
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
const FormContent1 =styled.div`
display:flex;
flex-direction: row;
margin:17px 0;
gap: 9px;

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
width: 13px;
height: 7px;
position: absolute;
left: 40rem;
top:220px;
cursor: pointer;
`


const FormContentChecbox=styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    padding-bottom:28px;
    border-bottom: 1px solid #E0E0E0;
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
margin-top:10px;
margin-bottom: 30px;

`
const FormSpan=styled.span`
color: ${(props)=> props.theme.pallet.blue1};

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