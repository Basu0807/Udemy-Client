import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Layouts/Footer';
import { Add } from '../Redux/CartSlice';


const GenericCourse = () => {
  const Products =useSelector((state)=>state.Search.SearchData)
  const Keyword =useSelector((state)=>state.Search.keyword)
  // console.log(Products);

  const[show,setshow]=useState(true)
  const[show1,setshow1]=useState(true)

  const dispatch=useDispatch()

  
  return (
   <>
   <div id='Generic_Course'>
   <h1 style={{marginBottom:10}}>{Products.length} related results for "{Keyword}" </h1> 
   {Products.length ===0?<h1>Sorry, No result found</h1>:<div className='Search_Container'>
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
    {Products && Products.map((item,index)=>{
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
   </div>}
   </div>
  
   <Footer/>
   </>
  )
}

export default GenericCourse