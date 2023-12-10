import React from 'react'
import {useNavigate } from 'react-router-dom'
import Footer from '../Layouts/Footer'

import { useSelector } from 'react-redux'

const MyLearning = () => {
  const CartItems=useSelector((state)=>state.InDe.Cart)
  // const dispatch = useDispatch()
  const navigate =useNavigate()

  return (
    <>
    {CartItems.length !==0 ? 
    <div className='Cart_Container'>
   <h1>My Learning</h1><br/>
   <div className='Added_Items_Container'>
    <div className='left_details'>
      <p>{CartItems.length} Courses</p><hr/>
      {CartItems && CartItems.map((item,index)=>{
        return(
          <div key={index} className='added_course_container'>
            <img src={item.image} alt='course_img'/>
            <div className='product_details'>
              <h3>{item.topic}</h3>
              <p>{item.instructor}</p>
              <p style={{fontWeight:'bold'}}>{item.rating} stars <span> (2175)</span></p>
              <p style={{fontSize:12}}>{item.duration} Total hours. {item.lectures} lectures. All levels</p>

            </div>
            {/* <div>
              <p className='remove' onClick={()=>dispatch(Remove(item._id))}>Remove</p>
              <p className='remove'>Save for Later</p>
              <p className='remove'>Move to wish list</p>
            </div>
            <div>
              <h3 className='remove'>₹{item.offerPrice}</h3>
            </div> */}

          </div>
        )
      })}
    </div>
   
   </div>
      </div>
    : 
    <div className='Cart_Container'>
    <h1>My Learning</h1><br/>
    <p>{CartItems.length} Courses</p>
    <div className='empty_container'>
      <img src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg' alt='empty_cart'/>
      <p>Your don't have any course in your learning. Keep shopping to find a course!</p><br/>
      <div  className='Keep_Shopping'onClick={()=>navigate('/')}>Add Courses</div>
    </div>
    
      </div>
      } 
  
      <Footer/>
   </>
    
  )
}

export default MyLearning