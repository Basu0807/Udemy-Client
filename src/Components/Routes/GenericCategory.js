import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Footer from '../Layouts/Footer';
import { Add } from '../Redux/CartSlice';


const GenericCategory = () => {
  const AllCourses =useSelector((state)=>state.data.data)
  
  // console.log(AllCourses);
 const Category =useLocation().state.Cat
 console.log(Category);
 const dispatch =useDispatch()
 const[show,setshow]=useState(true)
 const[show1,setshow1]=useState(true)

  return (
   <>
   <div className='Generic_Cat_Con'>
    <div>
      <p>{Category}</p>
    </div>
    <div>
      <h1>{Category}</h1>
      <h2>Courses to get you started</h2>
      <h3>Most Popular</h3>
      <div className='creative_box_contents'>
    {AllCourses && AllCourses.filter((item)=>item.category===Category || item.subcategory===Category).slice(0,5).map((item,index)=>{
      return(
      
        <div className='content' key={index}>
        <img src={item.image} alt='content'/>
        <h3>{item.topic}</h3>
        <p>{item.instructor}</p>
        <p><span className='rating'>{item.rating}</span>*****<span className='rating_count'>(5454529)</span></p>
        <p><span className='rating'>₹{item.offerPrice}</span> <span className='actual_price'>₹{item.price}</span></p>
        <div id='Add_toCart'>
          <h3>{item.topic}</h3>
          
            <p>1.{item.point1}</p>
            <p>2.{item.point2}</p>
            <p>3.{item.point2}</p>
          
          <button className='Keep_Shopping' onClick={()=>  {
            alert('Course added o your cart')
            dispatch(Add(item))}}>Add To Cart</button>
        </div>
    </div>
    
  
      )
    })}
      </div>
    </div>
    
      <h2>Popular Topics</h2>
      <div className='Popular_Topics'>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
        <div className='loginBox'>Python</div>
       
    </div>
    <h2>Popular Instructors</h2>
    <div className='Popular_instr'>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/31334738_a13c_3.jpg' alt='instructor'/>
    <div>
    <p>Dr. Angela Yu</p>
    <p>Python, Datascience</p>
    <p>4.6 starsInstructor Rating</p>
    <p>7894561 Students</p>
    <p>7 courses</p>
    </div>
   </div>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg' alt='instructor'/>
    <div>
    <p>Maximillian</p>
    <p>Python, Datascience</p>
    <p>4.6 starsInstructor Rating</p>
    <p>7894561 Students</p>
    <p>7 courses</p>
    </div>
   </div>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg' alt='instructor'/>
    <div>
    <p>Jonas</p>
    <p>Python, Datascience</p>
    <p>4.6 starsInstructor Rating</p>
    <p>7894561 Students</p>
    <p>7 courses</p>
    </div>
   </div>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/9685726_67e7_4.jpg' alt='instructor'/>
    <div>
    <p>Jose Portilla</p>
    <p>Python, Datascience</p>
    <p>4.6 starsInstructor Rating</p>
    <p>7894561 Students</p>
    <p>7 courses</p>
    </div>
   </div>
    </div>
    </div>
    <br/>
    <div id='Generic_Course'>
 
  <div className='Search_Container'>
    <div className='Rating_Container'>
<div><h2 onClick={()=>setshow(!show)}>Rating</h2>
<div className={show?"rating":"block"}>
  <input type='checkbox'/> 4.5 <span style={{color:'orange'}}>stars&up</span><br/>
  <input type='checkbox'/> 3.5 <span style={{color:'orange'}}>stars&up</span> <br/>
  <input type='checkbox'/> 3 <span style={{color:'orange'}}>stars&up</span> <br/>
  <input type='checkbox'/> 2 <span style={{color:'orange'}}>stars&up</span> <br/>
  
</div>
</div>
<div><h2 onClick={()=>setshow1(!show1)}>Video Duration</h2>
<div className={show1?"rating":"block"}>
  <input type='checkbox'/> 0-1 Hours<br/>
  <input type='checkbox'/> 1-3 Hours<br/>
  <input type='checkbox'/> 3-6 Hours<br/>
  <input type='checkbox'/> 6-10 Hours<br/>
  
</div>
</div>

<h2>Topic</h2>
<h2>Subcategory</h2>
<h2>Level</h2>
<h2>Language</h2>
<h2>Price</h2>
    </div>
    <div >
    {AllCourses && AllCourses.filter((item)=>item.category===Category|| item.subcategory===Category).slice(0,11).map((item,index)=>{
    return(
      
      <div key={index} className='Searched_item'>
        <img src={item.image} alt='img'/>
      <div className='Searched_item_details'>
        <div className='Searched_item_heading'>
          <h3>{item.topic}</h3>
          <h3>₹{item.price}</h3></div>
        <p>{item.point1}</p>
        <p style={{fontSize:12}}>By {item.instructor}</p>
        <p style={{fontWeight:'bold'}}>{item.rating} stars (2175)</p>
        <p style={{fontSize:12}}>{item.duration} Total hours. {item.lectures} lectures. All levels</p>
      </div>
      <div id='Add_toCart'>
          <h3>{item.topic}</h3>
          
            <p>1.{item.point1}</p>
            <p>2.{item.point2}</p>
            <p>3.{item.point2}</p>
          
          <button className='Keep_Shopping' onClick={()=>  {
            alert('Course added o your cart')
            dispatch(Add(item))}}>Add To Cart</button>
        </div>
      </div>
     
    )
   })}
    </div>
   </div>
   </div>
   <Footer/>
   </>
  )
}

export default GenericCategory