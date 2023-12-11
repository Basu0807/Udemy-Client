import React, { useEffect } from 'react'
import Home from '../Home'
import {Routes,Route} from 'react-router-dom'
import GenericCategory from './GenericCategory'
import GenericCourse from './GenericCourse'
import MyLearning from './MyLearning'
import Login from './Login'
import SignUp from './SignUp'
import AddToCart from './AddToCart'
import { useDispatch } from 'react-redux'
import { fetchData } from '../Redux/Thunk'



const RouteCompo = () => {
  const dispatch =useDispatch()
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses/:category' element={<GenericCategory/>}/>
        <Route path='/topic/:search' element={<GenericCourse/>}/>
        <Route path='/home/my-courses/learning/' element={<MyLearning/>}/>
        <Route path='/join/login-popup' element={<Login/>}/>
        <Route path='/join/signup-popup' element={<SignUp/>}/>
        <Route path='/AddtoCart' element={<AddToCart/>}/>
        </Routes>
    
    
    </>
  )
}

export default RouteCompo