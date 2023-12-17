import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Layouts/Footer'
import { Remove, TotalAmount } from '../Redux/CartSlice';
import {loadStripe} from '@stripe/stripe-js';

const AddToCart = () => {
    const token =localStorage.getItem("token")
    const UserEmail =localStorage.getItem("UserEmail")
    const CartItems=useSelector((state)=>state.InDe.Cart)
    const Total=useSelector((state)=>state.InDe.Total)
    const[data]=useState({
      email:UserEmail,
      Item:CartItems
    })
    // const quantity=useSelector((state)=>state.InDe.quantity)
    const navigate =useNavigate()
    const dispatch=useDispatch()
    dispatch(TotalAmount())


    useEffect(()=>{
        if(token){
          axios.get('https://udemy-server-h44n.onrender.com/user/profile',{headers:{
            "authorization":`Bearer ${token}`
          }}).then((res)=>(res.data)) 
          .catch((err)=>console.log(err))
        }
        else{
          alert('Please Login first')
          navigate('/join/login-popup')
        }
          },[token,navigate])

          const BuyNow = async () => {
            const stripe = await loadStripe("pk_test_51OHNDNSEW2AXc16ZTfkbWd5hSAEhfJCQNbBI3ZBzXHRRafQnJFttZWKdoCm3zh6VlsdcqUHtu3PDH3W4uim3iOrT007UzNPtUt");
            const body = {
              products: CartItems,
              total: Total
              // You might need to adjust this structure based on your backend expectations
            };
            console.log(body);
          
            const headers = {
              "Content-Type": "application/json"
            };
            
            try {
              const response = await fetch("https://udemy-server-h44n.onrender.com/checkout", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
              });
              
             
              const session = await response.json();
              const result = await stripe.redirectToCheckout({
                sessionId: session.id
          
              });
              await axios.post("https://udemy-server-h44n.onrender.com/my/purchase",data)
              
              if (result.error) {
                console.log(result.error);

              }
            } catch (error) {
              console.error("Error:", error);
            }
            

          };
          
  return (
   <>
    {CartItems.length !==0 ? 
    <div className='Cart_Container'>
   <h1>Shopping Cart</h1><br/>
   <div className='Added_Items_Container'>
    <div className='left_details'>
      <p>{CartItems.length} Courses in Cart</p><hr/>
      {CartItems && CartItems.map((item,index)=>{
        return(
          <div key={index} className='added_course_container'>
            <img src={item.image} alt='course_img'/>
            <div className='product_details'>
              <h3>{item.topic}</h3>
              <p>{item.instructor}</p>
              <p style={{fontWeight:'bold',fontSize:10}}>{item.rating} <img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/> <span> (2175)</span></p>
              <p style={{fontSize:10}}>{item.duration} Total hours. {item.lectures} lectures. All levels</p>

            </div>
            <div>
              <p className='remove' onClick={()=>dispatch(Remove(item._id))}>Remove</p>
              <p className='remove'>Save for Later</p>
              <p className='remove'>Move to wish list</p>
            </div>
            <div>
              <h3 className='remove'>₹{item.offerPrice}</h3>
            </div>

          </div>
        )
      })}
    </div>
    <div className='rightside_total_container'>
      <p style={{color:'grey'}}>Total :</p>
      <h1>₹{Total}</h1>
      <div  className='Keep_Shopping checkout' onClick={BuyNow}><p>Checkout</p></div>
      <hr/>
      <p>Promotions</p>
      <div style={{display:'flex'}}>
      <input type='text'/>
      <div className='Keep_Shopping'>Apply</div>
      </div>

    </div>
   </div>
      </div>
    : 
    <div className='Cart_Container'>
    <h1>Shopping Cart</h1><br/>
    <p>{CartItems.length} Courses in Cart</p>
    <div className='empty_container'>
      <img src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg' alt='empty_cart'/>
      <p>Your cart is empty. Keep shopping to find a course!</p><br/>
      <div  className='Keep_Shopping'onClick={()=>navigate('/')}>Keep Shopping</div>
    </div>
    
      </div>
      } 
  
      <Footer/>
   </>
  )
}

export default AddToCart