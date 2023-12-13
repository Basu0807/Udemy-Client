import React from 'react'
import Footer from './Layouts/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { Add } from './Redux/CartSlice';

const Home = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const AllCourses =useSelector((state)=>state.data.data)

    const dispatch=useDispatch()


  return (
 <>
 <div className='Home_Container'>
 <div className='Home_img_Container'>
    <div className='Inner_Container'>
        <h1>Always a new skill to learn</h1>
        <p>With courses added regularly to our catalog, you can get access to the latest skills. Courses from ₹529 through Dec 7.</p>
    </div>
 </div>
 <div className='brands_box'>
<p>Trusted by over 15,000 companies and millions of learners around the world</p>
<div className='brand_images'>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg' alt='brand_img'/>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg' alt='brand_img'/>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg' alt='brand_img'/>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/att.svg' alt='brand_img'/>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg' alt='brand_img'/>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg' alt='brand_img'/>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/citi.svg' alt='brand_img'/>
    <img src='https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg' alt='brand_img'/>
</div>
 </div>

 <div className='broad_selection'>
    <h1>A broad selection of courses</h1><br/>
    <p>Choose from over 210,000 online video courses with new additions published every month</p><br/>
    <div className='subjects'>
        <p>Python</p>
        <p>Excel</p>
        <p>Web Development</p>
        <p>JavaScript</p>
        <p>Data Science</p>
        <p>Amazon AWS</p>
        <p>Drawing</p>
    </div>
    <div className='creative_box'>
<div className='creative_box_heading'>
<h2>Expand your creative skillset with Drawing</h2><br/>
        <p>Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area...</p><br/>
        <div className='Explore_Drawing'>Explore Drawing</div>

</div>
<div className='creative_box_contents'>
{AllCourses && AllCourses.slice(1,6).map((item,index)=>{
      return(
      
        <div className='content' key={index}>
        <img src={item.image} alt='content'/>
        <h3>{item.topic}</h3>
        <p>{item.instructor}</p>
        <p><span className='rating'>{item.rating}</span><img src='https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg' alt='star'/><span className='rating_count'>(5454529)</span></p>
        <p><span className='rating'>₹{item.offerPrice}</span> <span className='actual_price'>₹{item.price}</span></p>
        
        
          <button className='Keep_Shopping' onClick={()=>  {
            alert('Course added o your cart')
            dispatch(Add(item))}}>Add To Cart</button>
        
    </div>
  
      )
    })}
   
</div>
    </div>
 </div>
 
 </div>
 <Footer/>

 </>
  )
}

export default Home