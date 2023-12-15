import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import Footer from '../Layouts/Footer'

const Login = () => {

  const navigate =useNavigate()
  const User = localStorage.getItem('UserName')

  const[data,setData]=useState({
    email:"",
    password:""
})
const InputHandler=(e)=>{
  setData((pre)=>{
  return{...pre,[e.target.name]:e.target.value}
  })
  }

  const SubmitHandler= async(event)=>{
    event.preventDefault()
    // console.log(data); 
    await axios.post('https://udemy-server-h44n.onrender.com/user/login',data)
    .then((res)=>{
    alert(res.data.msg)
      if(res.data.token){
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("UserName",res.data.user);
        localStorage.setItem("UserEmail",res.data.useremail);
        navigate('/')
      }
      else{
        navigate('/join/login-popup')
      }
    
    
    
    
    })
    .catch((err)=>console.log(err))
    
    setData({
    email:"",
    password:""
    })
    }
    const ScrollToTop = () => {
      navigate('/join/signup-popup')
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <>
    <form className='Login_Container'>
      <h3>Log in to your Udemy account</h3><br/>
      <img src='https://img-c.udemycdn.com/user/50x50/anonymous_3.png' alt='profile_img'/><br/>
      <p>Welcome back,{User}</p><br/>
      <input type='email' name="email" value={data.email}  onChange={InputHandler} placeholder='Email' required/><br/>
      <input type='password' name="password" value={data.password}  onChange={InputHandler} placeholder='password' required/><br/>
      <button type='button' className='login_btn' onClick={SubmitHandler}>Log in</button><br/>
       <p>or <span className='forget_password'>Forget Password</span></p><br/>
       <hr/>
       <p>Don't have account? <span className='forget_password' onClick={ScrollToTop}>Sign up</span></p><br/>
       <p className='forget_password' >Log in with your organization</p>

    </form>
    <Footer/>
    </>
  )
}

export default Login