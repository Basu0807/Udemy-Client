import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Layouts/Footer';
import { Add } from '../Redux/CartSlice';


const GenericCategory = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const AllCourses =useSelector((state)=>state.data.data)
  
 const Category =useLocation().state.Cat
//  console.log(Category);
 const dispatch =useDispatch()
 const[show,setshow]=useState(true)
 const[show1,setshow1]=useState(true)

  return (
   <>
   <div className='Generic_Cat_Con'>
    <div className='sub_routes'>
    {Category==="development" ||Category==='web development'||Category==='data science'||Category==='mobile development'||Category==='programming language'?
    <div className='sub_routing'>
         <Link to={'/courses/development'}state={{Cat:"development"}} className='Link'>Development</Link> 
         <Link className='Link'to={'/courses/Business'} state={{Cat:"web development"}}>web development</Link>
        <Link className='Link' to={'/courses/data science'} state={{Cat:'data science'}}>data science</Link>
        <Link className='Link' to={'/courses/mobile development'} state={{Cat:'mobile development'}}>mobile development</Link>
        <Link className='Link' to={'/courses/programming language'} state={{Cat:'programming language'}}>programming language</Link>

    </div>:""}
    {Category==="business" ||Category==='operations'||Category==='entrepreneurship'||Category==='communication'||Category==='management'||Category==='sales'?
    <div className='sub_routing'>
          <Link to={'/courses/Business'}state={{Cat:"business"}} className='Link'>Business</Link> 
<Link className='Link' to={'/courses/operations'} state={{Cat:'operations'}}>operations</Link>
        <Link className='Link' to={'/courses/entrepreneurship'} state={{Cat:'entrepreneurship'}}>entrepreneurship</Link>
        <Link className='Link' to={'/courses/communication'} state={{Cat:'communication'}}>communication</Link>
        <Link className='Link' to={'/courses/management'} state={{Cat:'management'}}>management</Link>
        <Link className='Link' to={'/courses/sales'} state={{Cat:'sales'}}>sales</Link>

    </div>:""}
    {Category==="Finance & Accounting"||Category==='Accounting & Bookkeeping'||Category==='Compliance'||Category==='Cryptocurrency & Blockchain'||Category==='Economics'||Category==='Finance' ?
    <div className='sub_routing'>
          <Link to={'/courses/Finance and Accounting'}state={{Cat:"Finance & Accounting"}}className='Link'>Finance and Accounting</Link> 
<Link className='Link' to={'/courses/Accounting & Bookkeeping'} state={{Cat:'Accounting & Bookkeeping'}}>Accounting & Bookkeeping</Link>
        <Link className='Link' to={'/courses/Compliance'} state={{Cat:'Compliance'}}>Compliance</Link>
        <Link className='Link' to={'/courses/Cryptocurrency & Blockchain'} state={{Cat:'Cryptocurrency & Blockchain'}}>Cryptocurrency & Blockchain</Link>
        <Link className='Link' to={'/courses/Economics'} state={{Cat:'Economics'}}>Economics</Link>
        <Link className='Link' to={'/courses/Finance'} state={{Cat:'Finance'}}>Finance</Link>

    </div>:""}
    {Category==="IT & Software"||Category==='IT Certifications'||Category==='Network & Security'||Category==='Hardware'||Category==='Other IT & Software'||Category==='Operating Systems & Servers' ?
    <div className='sub_routing'>
          <Link to={'/courses/IT & Software'}state={{Cat:"IT & Software"}}className='Link'>IT & Software</Link> 
      <Link className='Link' to={'/courses/IT Certifications'} state={{Cat:'IT Certifications'}}>IT Certifications</Link>
        <Link className='Link' to={'/courses/Network & Security'} state={{Cat:'Network & Security'}}>Network & Security</Link>
        <Link className='Link' to={'/courses/Hardware'} state={{Cat:'Hardware'}}>Hardware</Link>
        <Link className='Link' to={'/courses/Other IT & Software'} state={{Cat:'Other IT & Software'}}>Other IT & Software</Link>
        <Link className='Link' to={'/courses/Operating Systems & Servers'} state={{Cat:'Operating Systems & Servers'}}>Operating Systems & Servers</Link>

    </div>:""}
    {Category==="Design" ||Category==='Web Design'||Category==='Design Tools'||Category==='Game Design'||Category==='User Experience Design'||Category==='Graphic Design & Illustration'?
    <div className='sub_routing'> 
       <Link to={'/courses/Design'}state={{Cat:"Design"}}className='Link'>Design</Link> 
      <Link className='Link' to={'/courses/Web Design'} state={{Cat:'Web Design'}}>Web Design</Link>
      <Link className='Link' to={'/courses/Design Tools'} state={{Cat:'Design Tools'}}>Design Tools</Link>
      <Link className='Link' to={'/courses/Game Design'} state={{Cat:'Game Design'}}>Game Design</Link>
      <Link className='Link' to={'/courses/User Experience Design'} state={{Cat:'User Experience Design'}}>User Experience Design</Link>
      <Link className='Link' to={'/courses/Graphic Design & Illustration'} state={{Cat:'Graphic Design & Illustration'}}>Graphic Design & Illustration</Link>

    </div>:""}
    {Category==="Marketing"||Category==='Digital Marketing'||Category==='Branding'||Category==='Marketing Fundamentals'||Category==='Social Media Marketing'||Category==='Search Engine Optimization' ?
    <div className='sub_routing'>
          <Link to={'/courses/Marketing'}state={{Cat:"Marketing"}}className='Link'>Marketing</Link> 
      <Link className='Link' to={'/courses/Digital Marketing'} state={{Cat:'Digital Marketing'}}>Digital Marketing</Link>
      <Link className='Link' to={'/courses/Branding'} state={{Cat:'Branding'}}>Branding</Link>
      <Link className='Link' to={'/courses/Marketing Fundamentals'} state={{Cat:'Marketing Fundamentals'}}>Marketing Fundamentals</Link>
      <Link className='Link' to={'/courses/Social Media Marketing'} state={{Cat:'Social Media Marketing'}}>Social Media Marketing</Link>
      <Link className='Link' to={'/courses/Search Engine Optimization'} state={{Cat:'Search Engine Optimization'}}>Search Engine Optimization</Link>
    </div>:""}
    {Category==="Lifestyle"||Category==='Arts & Crafts'||Category==='Beauty & Makeup'||Category==='Esoteric Practices'||Category==='Food & Beverage'||Category==='Gaming' ?
    <div className='sub_routing'>
          <Link to={'/courses/Life Style'}state={{Cat:"Lifestyle"}}className='Link'>Life Style</Link> 
      <Link className='Link' to={'/courses/Arts & Crafts'} state={{Cat:'Arts & Crafts'}}>Arts & Crafts</Link>
      <Link className='Link' to={'/courses/Beauty & Makeup'} state={{Cat:'Beauty & Makeup'}}>Beauty & Makeup</Link>
      <Link className='Link' to={'/courses/Esoteric Practices'} state={{Cat:'Esoteric Practices'}}>Esoteric Practices</Link>
      <Link className='Link' to={'/courses/Food & Beverage'} state={{Cat:'Food & Beverage'}}>Food & Beverage</Link>
      <Link className='Link' to={'/courses/Gaming'} state={{Cat:'Gaming'}}>Gaming</Link>

    </div>:""}
    {Category==="Photography & Video"||Category==='Digital Photography'||Category==='Photography'||Category==='Commercial Photography'||Category==='Photography Tools'||Category==='Portrait Photography' ?
    <div className='sub_routing'>
          <Link to={'/courses/Photography & Video'}state={{Cat:"Photography & Video"}}className='Link'>Photography & Video</Link> 
      <Link className='Link' to={'/courses/Digital Photography'} state={{Cat:'Digital Photography'}}>Digital Photography</Link>
      <Link className='Link' to={'/courses/Photography'} state={{Cat:'Photography'}}>Photography</Link>
      <Link className='Link' to={'/courses/Commercial Photography'} state={{Cat:'Commercial Photography'}}>Commercial Photography</Link>
      <Link className='Link' to={'/courses/Photography Tools'} state={{Cat:'Photography Tools'}}>Photography Tools</Link>
      <Link className='Link' to={'/courses/Portrait Photography'} state={{Cat:'Portrait Photography'}}>Portrait Photography</Link>

    </div>:""}
    {Category==="Music"||Category==='Instruments'||Category==='Vocal'||Category==='Music Techniques'||Category==='Music Production'||Category==='Music Fundamentals' ?
    <div className='sub_routing'>
          <Link to={'/courses/Music & Arts'}state={{Cat:"Music"}}className='Link'>Music & Arts</Link> 
      <Link className='Link' to={'/courses/Instruments'} state={{Cat:'Instruments'}}>Instruments</Link>
      <Link className='Link' to={'/courses/Vocal'} state={{Cat:'Vocal'}}>Vocal</Link>
      <Link className='Link' to={'/courses/Music Techniques'} state={{Cat:'Music Techniques'}}>Music Techniques</Link>
      <Link className='Link' to={'/courses/Music Production'} state={{Cat:'Music Production'}}>Music Production</Link>
      <Link className='Link' to={'/courses/ Music Fundamentals'} state={{Cat:'Music Fundamentals'}}> Music Fundamentals</Link>

    </div>:""}
    {Category==="Health & Fitness"||Category==='Fitness'||Category==='Sports'||Category==='Nutrition & Diet'||Category==='General Health' ?
    <div className='sub_routing'>
          <Link to={'/courses/Health & Fitness'}state={{Cat:"Health & Fitness"}}className='Link'>Health & Fitness</Link> 
      <Link className='Link' to={'/courses/Fitness'} state={{Cat:'Fitness'}}>Fitness</Link>
      <Link className='Link' to={'/courses/Sports'} state={{Cat:'Sports'}}>Sports</Link>
      <Link className='Link' to={'/courses/Yoga'} state={{Cat:'Sports'}}>Sports</Link>
      <Link className='Link' to={'/courses/Nutrition & Diet'} state={{Cat:'Nutrition & Diet'}}>Nutrition & Diet</Link>
      <Link className='Link' to={'/courses/General Health'} state={{Cat:'General Health'}}>General Health</Link>

    </div>:""}
    {Category==="Teaching & Academics"||Category==='Engineering'||Category==='Humanities'||Category==='Math'||Category==='Science'||Category==='Online Education' ?
    <div className='sub_routing'>
  <Link to={'/courses/Teaching & Academic'}state={{Cat:"Teaching & Academics"}}className='Link'>Teaching & Academics</Link>

      <Link className='Link' to={'/courses/Engineering'} state={{Cat:'Engineering'}}>Engineering</Link>
      <Link className='Link' to={'/courses/Humanities'} state={{Cat:'Humanities'}}>Humanities</Link>
      <Link className='Link' to={'/courses/Math'} state={{Cat:'Math'}}>Math</Link>
      <Link className='Link' to={'/courses/Science'} state={{Cat:'Science'}}>Science</Link>
      <Link className='Link' to={'/courses/Online Education'} state={{Cat:'Online Education'}}>Online Education</Link>

    </div>:""}
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
        <button className='Keep_Shopping none' onClick={()=>  {
            alert('Course added o your cart')
            dispatch(Add(item))}}>Add To Cart</button>
        <div id='Add_toCart'>
          <h4>{item.topic}</h4><br/>
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
    <p><b>Angela</b></p>
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
        <p style={{fontSize:12}}>{item.duration} Total hours. {item.lectures} lectures. All levels</p><br/>
        <button className='Keep_Shopping none' onClick={()=>  {
            alert('Course added o your cart')
            dispatch(Add(item))}}>Add To Cart</button>
      </div>
      <div id='Add_toCart'>
          <h4>{item.topic}</h4><br/>
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