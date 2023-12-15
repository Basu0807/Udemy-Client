import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Layouts/Footer'

const SignUp = () => {
  const[data,setData]=useState({
    name:"",
    email:"",
    password:""
})

const navigate = useNavigate()
const InputHandler=(e)=>{
  setData((pre)=>{
  return{...pre,[e.target.name]:e.target.value}
  })
  }
 console.log(data);

const SubmitHandler=(event)=>{
event.preventDefault()
axios.post('https://udemy-server-h44n.onrender.com/user/register',data)
.then((res)=>{
alert(res.data.msg) 
if(res.data.msg === "You have successfully registered"){
  localStorage.setItem("token",res.data.token)
  localStorage.setItem("UserName",res.data.user)
  localStorage.setItem("userEmail",res.data.useremail)
  navigate('/')
}
else{
  navigate('/join/signup-popup')
}

})
.catch((err)=>console.log(err))

setData({
name:"",
email:"",
password:""
})

}
const ScrollToTop = () => {
  navigate('/join/login-popup')
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


  return (
    <>
    <div className='Login_Container'>
      <h3>Sign up and start learning</h3><br/>
      <input typeof='text' name="name" value={data.name}  onChange={InputHandler} placeholder='Full Name' required autoComplete='off'/><br/>
      <input type='email' name="email" value={data.email}  onChange={InputHandler} placeholder='Email' required autoComplete='off'/><br/>
      <input type='password' name="password" value={data.password}  onChange={InputHandler} placeholder='password' required/><br/>
      <input type='checkbox' id='checkbox'/><span>Send me special offers, personlized recommendations, and learning tips.</span>
      
      <button type='button' className='login_btn' onClick={SubmitHandler}>Sign up</button><br/>
       <p style={{fontSize:12}}>By signing up, you agree to our Terms of Use and Privacy Policy.</p><br/>
       <hr/><br/>
       <p style={{fontSize:14}}>Already have an account? <span className='forget_password' onClick={ScrollToTop}>Log in</span></p><br/>

    </div>
    <Footer/>
    </>

    
  )
}

export default SignUp