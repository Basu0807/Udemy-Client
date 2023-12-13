import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Footer from '../Layouts/Footer';
import { Add } from '../Redux/CartSlice';


const GenericCategory = () => {
  const AllCourses =useSelector((state)=>state.data.data)
  
  // console.log(AllCourses);
 const Category =useLocation().state.Cat
//  console.log(Category);
 const dispatch =useDispatch()
 const[show,setshow]=useState(true)
 const[show1,setshow1]=useState(true)

  return (
   <>
   <div className='Generic_Cat_Con'>
    <div>
      <p>{Category}</p>
    </div><br/>
    <div>
      <h1>{Category} Courses</h1><br/><br/>
      <h2>Courses to get you started</h2>
      <br/>
      <h4>Most Popular</h4>
      <div className='creative_box_contents'>
    {AllCourses && AllCourses.filter((item)=>item.category===Category || item.subcategory===Category).slice(0,5).map((item,index)=>{
      return(
      
        <div className='content' key={index}>
        <img src={item.image} alt='content'/>
        <h3>{item.topic}</h3>
        <p>{item.instructor}</p>
        <p><span className='rating'>{item.rating}</span><img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/><span className='rating_count'>(5454529)</span></p>
        <p><span className='rating'>₹{item.offerPrice}</span> <span className='actual_price'>₹{item.price}</span></p>
        <div id='Add_toCart'>
          <h3>{item.topic}</h3><br/>
          <p style={{fontSize:12}}>{item.duration} Total hours. {item.lectures} lectures. All levels</p><br/>

            <p>1.{item.point1}</p><br/>
            <p>2.{item.point2}</p><br/>
            <p>3.{item.point2}</p><br/>
          
          <button className='Keep_Shopping' onClick={()=>  {
            alert('Course added o your cart')
            dispatch(Add(item))}}>Add To Cart</button>
        </div>
    </div>
    
  
      )
    })}
      </div>
    </div>
    
      <h2>Popular Topics</h2><br/>
      <div className='Popular_Topics'>
        <div className='PopularBox'>Python</div>
        <div className='PopularBox'>Data Science</div>
        <div className='PopularBox'>React JS</div>
        <div className='PopularBox'>Java</div>
        <div className='PopularBox'>C# (programming Language)</div>
        <div className='PopularBox'>Web Development</div>
        <div className='PopularBox'>JavaScript</div>
        <div className='PopularBox'>Unreal Engine</div>
        <div className='PopularBox'>Machine Learning</div>
        <div className='PopularBox'>Deep Learning</div>
       
    </div><br/>
    <h2>Popular Instructors</h2><br/>
    <div className='Popular_instr'>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/31334738_a13c_3.jpg' alt='instructor'/>
    <div className='instruc_details'>
    <p><b>Dr. Angela Yu</b></p>
    <p style={{fontSize:13}}>Python, Datascience</p>
    <p><b style={{fontSize:14}}>4.6</b> <img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/> <span style={{fontSize:12}}>Instructor Rating</span></p>
    <p><b style={{fontSize:13}}>2,345,25</b> <span style={{fontSize:12}}>Students</span></p>
    <p><b style={{fontSize:13}}>7</b> <span style={{fontSize:12}}>courses</span></p>
    </div>
   </div>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg' alt='instructor'/>
    <div className='instruc_details'>
    <p><b>Maximillian</b></p>
    <p style={{fontSize:13}}>React JS, React Hooks</p>
    <p><b style={{fontSize:14}}>4.3</b> <img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/> <span style={{fontSize:12}}>Instructor Rating</span></p>
    <p><b style={{fontSize:13}}>2,345,25</b> <span style={{fontSize:12}}>Students</span></p>
    <p><b style={{fontSize:13}}>5</b> <span style={{fontSize:12}}>courses</span></p>
    </div>
   </div>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg' alt='instructor'/>
    <div className='instruc_details'>
    <p><b>Jonas</b></p>
    <p style={{fontSize:13}}>JavaScript</p>
    <p><b style={{fontSize:14}}>4.5</b> <img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/> <span style={{fontSize:12}}>Instructor Rating</span></p>
    <p><b style={{fontSize:13}}>5,345,25</b> <span style={{fontSize:12}}>Students</span></p>
    <p><b style={{fontSize:13}}>9</b> <span style={{fontSize:12}}>courses</span></p>
    </div>
   </div>
   <div className='instructor_box'>
    <img src='https://img-c.udemycdn.com/user/75x75/9685726_67e7_4.jpg' alt='instructor'/>
    <div className='instruc_details'>
    <p><b>Jose Portilla</b></p>
    <p style={{fontSize:13}}>Python, Datascience</p>
    <p><b style={{fontSize:14}}>4.2</b> <img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/> <span style={{fontSize:12}}>Instructor Rating</span></p>
    <p><b style={{fontSize:13}}>1,345,25</b> <span style={{fontSize:12}}>Students</span></p>
    <p><b style={{fontSize:13}}>12</b> <span style={{fontSize:12}}>courses</span></p>
    </div>
   </div>
    </div>
    </div>
    
    <div id='Generic_Course'>
 <h1>All {Category} Courses</h1>
  <div className='Search_Container'>
    <div className='Rating_Container'>
<div><h2 onClick={()=>setshow(!show)}>Rating</h2>
<div className={show?"rating":"block"}>
  <input type='checkbox'/> 4.5 <span style={{color:'orange'}}><img src='https://t3.ftcdn.net/jpg/05/40/06/92/240_F_540069216_AiqmGY0nEt8IhFgjIoCG11IVQG3IoobK.jpg' alt='star'/>&up</span><br/>
  <input type='checkbox'/> 3.5 <span style={{color:'orange'}}><img src='https://t3.ftcdn.net/jpg/05/40/06/92/240_F_540069216_AiqmGY0nEt8IhFgjIoCG11IVQG3IoobK.jpg' alt='star'/>&up</span> <br/>
  <input type='checkbox'/> 3 <span style={{color:'orange'}}><img src='https://t3.ftcdn.net/jpg/05/40/06/92/240_F_540069216_AiqmGY0nEt8IhFgjIoCG11IVQG3IoobK.jpg' alt='star'/>&up</span> <br/>
  <input type='checkbox'/> 2 <span style={{color:'orange'}}><img src='https://t3.ftcdn.net/jpg/05/40/06/92/240_F_540069216_AiqmGY0nEt8IhFgjIoCG11IVQG3IoobK.jpg' alt='star'/>&up</span> <br/>
  
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
        <p style={{fontWeight:'bold'}}>{item.rating} <img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/> (2175)</p>
        <p style={{fontSize:12}}>{item.duration} Total hours. {item.lectures} lectures. All levels</p>
      </div>
      <div id='Add_toCart'>
          <h3>{item.topic}</h3><br/>
          <p style={{fontSize:12}}>{item.duration} Total hours. {item.lectures} lectures. All levels</p><br/>

            <p>1.{item.point1}</p><br/>
            <p>2.{item.point2}</p><br/>
            <p>3.{item.point2}</p><br/>
          
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