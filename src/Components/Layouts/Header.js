import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SearchItem } from '../Redux/SearchSlice'



const Header = () => {

  const navigate=useNavigate()
  const dispatch =useDispatch()
  const CartCount=useSelector((state)=>state.InDe.Cart.length)
    const [search,setsearch]= useState({keyword:"",item:[]})

  const InputHandler=(e)=>{
    setsearch((pre)=>{
    return{...pre,[e.target.name]:e.target.value}
    })
    }

    // console.log(search);
    const token =localStorage.getItem('token')
    const UserName =localStorage.getItem('UserName')
    const UserEmail =localStorage.getItem('UserEmail')
    // console.log(token);
    const getFirstLetters = (fullName) => {
      if (fullName) {
        const nameParts = fullName.split(' '); // Split full name into parts using space as separator
        const firstName = nameParts[0]; // First part is the first name
        const lastName = nameParts[nameParts.length - 1]; // Last part is the last name
  
        const firstLetterFirstName = firstName.charAt(0).toUpperCase(); // Get first letter of first name
        const firstLetterLastName = lastName.charAt(0).toUpperCase(); // Get first letter of last name
  
        return `${firstLetterFirstName}${firstLetterLastName}`;
      }
      return '';
    };

    const Logout=()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('UserEmail')
      // localStorage.removeItem('UserName')
      alert('You will be logged out')
      navigate('/')
    }
    const Search= async (e)=>{
      e.preventDefault()
     
        axios.get(`https://udemy-server-h44n.onrender.com/store/search/?keyword=${search.keyword}`)
            .then((res)=>dispatch(SearchItem([res.data.data,search.keyword])))
            .catch((err)=>console.log(err))
         
           setsearch({
              keyword:''
            })
          
     
     navigate('/topic/'+search.keyword)
      
    }
    const[menu,setmenu]=useState(false)

      return (
    <>
    <div className='mobile_Nav_Bar'>
    <div className='Ham_icon' onClick={()=>{setmenu(!menu)}}>
        <div className='bar bar1'></div>
        <div className='bar bar2'></div>
        <div className='bar bar3'></div>
        
          <div className={menu?'Cat_box':"block"}>
         <div>
      <nav>
  <ul>
    <li>
    <div className={token?"profile_display":'block'}>
      <p className='name_display'>{getFirstLetters(UserName)}</p>
        
        
          <div>
            <p style={{fontWeight:'bold',fontSize:18}}>{UserName}</p>
            <p style={{fontSize:12}}>{UserEmail}</p>
          </div><br/>
          
        <hr/>
       <p onClick={()=>navigate('/home/my-courses/learning/')}>My Learning</p><hr/>
        <p onClick={()=>navigate('/teaching/Udemy')}>Tech On Udemy</p><hr/>
       <p onClick={()=>navigate('/AddtoCart')}>Add to cart</p><hr/>
      <p onClick={Logout}>Log out</p>
        
        
        </div>
    </li>
    <li><div className={token?"block":'Signup'} onClick={()=>navigate('/join/login-popup')}><p>Log in</p></div></li>
    <li><div className={token?"block":'Signup'}onClick={()=>navigate('/join/signup-popup')}><p>Sign up</p></div></li>
   <li>
   <Link to={'/courses/development'}state={{Cat:"development"}} className='Link'>Development</Link> 
        <ul className="submenu">
          <li>   <Link to={'/courses/development'}state={{Cat:"development"}} className='Link'>Development</Link> </li>
        <li><Link className='Link'to={'/courses/Business'} state={{Cat:"web development"}}>web development</Link></li>
        <li><Link className='Link' to={'/courses/data science'} state={{Cat:'data science'}}>data science</Link></li>
        <li><Link className='Link' to={'/courses/mobile development'} state={{Cat:'mobile development'}}>mobile development</Link></li>
        <li><Link className='Link' to={'/courses/programming language'} state={{Cat:'programming language'}}>programming language</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Business'}state={{Cat:"business"}} className='Link'>Business</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/operations'} state={{Cat:'operations'}}>operations</Link></li>
        <li><Link className='Link' to={'/courses/entrepreneurship'} state={{Cat:'entrepreneurship'}}>entrepreneurship</Link></li>
        <li><Link className='Link' to={'/courses/communication'} state={{Cat:'communication'}}>communication</Link></li>
        <li><Link className='Link' to={'/courses/management'} state={{Cat:'management'}}>management</Link></li>
        <li><Link className='Link' to={'/courses/sales'} state={{Cat:'sales'}}>sales</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Finance and Accounting'}state={{Cat:"Finance & Accounting"}}className='Link'>Finance and Accounting</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Accounting & Bookkeeping'} state={{Cat:'Accounting & Bookkeeping'}}>Accounting & Bookkeeping</Link></li>
        <li><Link className='Link' to={'/courses/Compliance'} state={{Cat:'Compliance'}}>Compliance</Link></li>
        <li><Link className='Link' to={'/courses/Cryptocurrency & Blockchain'} state={{Cat:'Cryptocurrency & Blockchain'}}>Cryptocurrency & Blockchain</Link></li>
        <li><Link className='Link' to={'/courses/Economics'} state={{Cat:'Economics'}}>Economics</Link></li>
        <li><Link className='Link' to={'/courses/Finance'} state={{Cat:'Finance'}}>Finance</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/IT & Software'}state={{Cat:"IT & Software"}}className='Link'>IT & Software</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/IT Certifications'} state={{Cat:'IT Certifications'}}>IT Certifications</Link></li>
        <li><Link className='Link' to={'/courses/Network & Security'} state={{Cat:'Network & Security'}}>Network & Security</Link></li>
        <li><Link className='Link' to={'/courses/Hardware'} state={{Cat:'Hardware'}}>Hardware</Link></li>
        <li><Link className='Link' to={'/courses/Other IT & Software'} state={{Cat:'Other IT & Software'}}>Other IT & Software</Link></li>
        <li><Link className='Link' to={'/courses/Operating Systems & Servers'} state={{Cat:'Operating Systems & Servers'}}>Operating Systems & Servers</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Design'}state={{Cat:"Design"}}className='Link'>Design</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Web Design'} state={{Cat:'Web Design'}}>Web Design</Link></li>
      <li><Link className='Link' to={'/courses/Design Tools'} state={{Cat:'Design Tools'}}>Design Tools</Link></li>
      <li><Link className='Link' to={'/courses/Game Design'} state={{Cat:'Game Design'}}>Game Design</Link></li>
      <li><Link className='Link' to={'/courses/User Experience Design'} state={{Cat:'User Experience Design'}}>User Experience Design</Link></li>
      <li><Link className='Link' to={'/courses/Graphic Design & Illustration'} state={{Cat:'Graphic Design & Illustration'}}>Graphic Design & Illustration</Link></li>
      
      </ul>
    </li>
    <li>
    <Link to={'/courses/Marketing'}state={{Cat:"Marketing"}}className='Link'>Marketing</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Digital Marketing'} state={{Cat:'Digital Marketing'}}>Digital Marketing</Link></li>
      <li><Link className='Link' to={'/courses/Branding'} state={{Cat:'Branding'}}>Branding</Link></li>
      <li><Link className='Link' to={'/courses/Marketing Fundamentals'} state={{Cat:'Marketing Fundamentals'}}>Marketing Fundamentals</Link></li>
      <li><Link className='Link' to={'/courses/Social Media Marketing'} state={{Cat:'Social Media Marketing'}}>Social Media Marketing</Link></li>
      <li><Link className='Link' to={'/courses/Search Engine Optimization'} state={{Cat:'Search Engine Optimization'}}>Search Engine Optimization</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Life Style'}state={{Cat:"Lifestyle"}}className='Link'>Life Style</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Arts & Crafts'} state={{Cat:'Arts & Crafts'}}>Arts & Crafts</Link></li>
      <li><Link className='Link' to={'/courses/Beauty & Makeup'} state={{Cat:'Beauty & Makeup'}}>Beauty & Makeup</Link></li>
      <li><Link className='Link' to={'/courses/Esoteric Practices'} state={{Cat:'Esoteric Practices'}}>Esoteric Practices</Link></li>
      <li><Link className='Link' to={'/courses/Food & Beverage'} state={{Cat:'Food & Beverage'}}>Food & Beverage</Link></li>
      <li><Link className='Link' to={'/courses/Gaming'} state={{Cat:'Gaming'}}>Gaming</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Photography & Video'}state={{Cat:"Photography & Video"}}className='Link'>Photography & Video</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Digital Photography'} state={{Cat:'Digital Photography'}}>Digital Photography</Link></li>
      <li><Link className='Link' to={'/courses/Photography'} state={{Cat:'Photography'}}>Photography</Link></li>
      <li><Link className='Link' to={'/courses/Commercial Photography'} state={{Cat:'Commercial Photography'}}>Commercial Photography</Link></li>
      <li><Link className='Link' to={'/courses/Photography Tools'} state={{Cat:'Photography Tools'}}>Photography Tools</Link></li>
      <li><Link className='Link' to={'/courses/Portrait Photography'} state={{Cat:'Portrait Photography'}}>Portrait Photography</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Music & Arts'}state={{Cat:"Music"}}className='Link'>Music & Arts</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Instruments'} state={{Cat:'Instruments'}}>Instruments</Link></li>
      <li><Link className='Link' to={'/courses/Vocal'} state={{Cat:'Vocal'}}>Vocal</Link></li>
      <li><Link className='Link' to={'/courses/Music Techniques'} state={{Cat:'Music Techniques'}}>Music Techniques</Link></li>
      <li><Link className='Link' to={'/courses/Music Production'} state={{Cat:'Music Production'}}>Music Production</Link></li>
      <li><Link className='Link' to={'/courses/ Music Fundamentals'} state={{Cat:'Music Fundamentals'}}> Music Fundamentals</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Health & Fitness'}state={{Cat:"Health & Fitness"}}className='Link'>Health & Fitness</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Fitness'} state={{Cat:'Fitness'}}>Fitness</Link></li>
      <li><Link className='Link' to={'/courses/Sports'} state={{Cat:'Sports'}}>Sports</Link></li>
      <li><Link className='Link' to={'/courses/Yoga'} state={{Cat:'Sports'}}>Sports</Link></li>
      <li><Link className='Link' to={'/courses/Nutrition & Diet'} state={{Cat:'Nutrition & Diet'}}>Nutrition & Diet</Link></li>
      <li><Link className='Link' to={'/courses/General Health'} state={{Cat:'General Health'}}>General Health</Link></li>
      </ul>
    </li>
    <li>
  <Link to={'/courses/Teaching & Academic'}state={{Cat:"Teaching & Academics"}}className='Link'>Teaching & Academics</Link>

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Engineering'} state={{Cat:'Engineering'}}>Engineering</Link></li>
      <li><Link className='Link' to={'/courses/Humanities'} state={{Cat:'Humanities'}}>Humanities</Link></li>
      <li><Link className='Link' to={'/courses/Math'} state={{Cat:'Math'}}>Math</Link></li>
      <li><Link className='Link' to={'/courses/Science'} state={{Cat:'Science'}}>Science</Link></li>
      <li><Link className='Link' to={'/courses/Online Education'} state={{Cat:'Online Education'}}>Online Education</Link></li>
      </ul>
    </li>
   </ul>
</nav>
      </div> 
       
          

          </div>
        </div>
        <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='Udemy_Logo' onClick={()=>navigate('/')} />
    <span><img src='https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png' alt='lens' onClick={Search} /></span><input className='Search_Bar'type='text' name='keyword' value={search.keyword} placeholder='Search for anything' onChange={InputHandler} />

       <img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3264057/shopping-cart-icon-md.png' alt='cart_image' onClick={()=>navigate('/AddtoCart')}/><span className="cart_count">{CartCount}</span>

    </div>
    

          {/* ............................................. */}
    <div className='Nav_Bar'> 
        <div className='Udemy_Category'>
        <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='Udemy_Logo' onClick={()=>navigate('/')} />
        <div id='Category'><p>Categories</p>
        <div id='Cat_SubCat_Box'>
          <div className='Cat_box'>
         <div>
      <nav>
  <ul>
   <li>
   <Link to={'/courses/development'}state={{Cat:"development"}} className='Link'>Development</Link> 
        <ul className="submenu">
        <li><Link className='Link'to={'/courses/Business'} state={{Cat:"web development"}}>web development</Link></li>
        <li><Link className='Link' to={'/courses/data science'} state={{Cat:'data science'}}>data science</Link></li>
        <li><Link className='Link' to={'/courses/mobile development'} state={{Cat:'mobile development'}}>mobile development</Link></li>
        <li><Link className='Link' to={'/courses/programming language'} state={{Cat:'programming language'}}>programming language</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Business'}state={{Cat:"business"}} className='Link'>Business</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/operations'} state={{Cat:'operations'}}>operations</Link></li>
        <li><Link className='Link' to={'/courses/entrepreneurship'} state={{Cat:'entrepreneurship'}}>entrepreneurship</Link></li>
        <li><Link className='Link' to={'/courses/communication'} state={{Cat:'communication'}}>communication</Link></li>
        <li><Link className='Link' to={'/courses/management'} state={{Cat:'management'}}>management</Link></li>
        <li><Link className='Link' to={'/courses/sales'} state={{Cat:'sales'}}>sales</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Finance and Accounting'}state={{Cat:"Finance & Accounting"}}className='Link'>Finance and Accounting</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Accounting & Bookkeeping'} state={{Cat:'Accounting & Bookkeeping'}}>Accounting & Bookkeeping</Link></li>
        <li><Link className='Link' to={'/courses/Compliance'} state={{Cat:'Compliance'}}>Compliance</Link></li>
        <li><Link className='Link' to={'/courses/Cryptocurrency & Blockchain'} state={{Cat:'Cryptocurrency & Blockchain'}}>Cryptocurrency & Blockchain</Link></li>
        <li><Link className='Link' to={'/courses/Economics'} state={{Cat:'Economics'}}>Economics</Link></li>
        <li><Link className='Link' to={'/courses/Finance'} state={{Cat:'Finance'}}>Finance</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/IT & Software'}state={{Cat:"IT & Software"}}className='Link'>IT & Software</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/IT Certifications'} state={{Cat:'IT Certifications'}}>IT Certifications</Link></li>
        <li><Link className='Link' to={'/courses/Network & Security'} state={{Cat:'Network & Security'}}>Network & Security</Link></li>
        <li><Link className='Link' to={'/courses/Hardware'} state={{Cat:'Hardware'}}>Hardware</Link></li>
        <li><Link className='Link' to={'/courses/Other IT & Software'} state={{Cat:'Other IT & Software'}}>Other IT & Software</Link></li>
        <li><Link className='Link' to={'/courses/Operating Systems & Servers'} state={{Cat:'Operating Systems & Servers'}}>Operating Systems & Servers</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Design'}state={{Cat:"Design"}}className='Link'>Design</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Web Design'} state={{Cat:'Web Design'}}>Web Design</Link></li>
      <li><Link className='Link' to={'/courses/Design Tools'} state={{Cat:'Design Tools'}}>Design Tools</Link></li>
      <li><Link className='Link' to={'/courses/Game Design'} state={{Cat:'Game Design'}}>Game Design</Link></li>
      <li><Link className='Link' to={'/courses/User Experience Design'} state={{Cat:'User Experience Design'}}>User Experience Design</Link></li>
      <li><Link className='Link' to={'/courses/Graphic Design & Illustration'} state={{Cat:'Graphic Design & Illustration'}}>Graphic Design & Illustration</Link></li>
      
      </ul>
    </li>
    <li>
    <Link to={'/courses/Marketing'}state={{Cat:"Marketing"}}className='Link'>Marketing</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Digital Marketing'} state={{Cat:'Digital Marketing'}}>Digital Marketing</Link></li>
      <li><Link className='Link' to={'/courses/Branding'} state={{Cat:'Branding'}}>Branding</Link></li>
      <li><Link className='Link' to={'/courses/Marketing Fundamentals'} state={{Cat:'Marketing Fundamentals'}}>Marketing Fundamentals</Link></li>
      <li><Link className='Link' to={'/courses/Social Media Marketing'} state={{Cat:'Social Media Marketing'}}>Social Media Marketing</Link></li>
      <li><Link className='Link' to={'/courses/Search Engine Optimization'} state={{Cat:'Search Engine Optimization'}}>Search Engine Optimization</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Life Style'}state={{Cat:"Lifestyle"}}className='Link'>Life Style</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Arts & Crafts'} state={{Cat:'Arts & Crafts'}}>Arts & Crafts</Link></li>
      <li><Link className='Link' to={'/courses/Beauty & Makeup'} state={{Cat:'Beauty & Makeup'}}>Beauty & Makeup</Link></li>
      <li><Link className='Link' to={'/courses/Esoteric Practices'} state={{Cat:'Esoteric Practices'}}>Esoteric Practices</Link></li>
      <li><Link className='Link' to={'/courses/Food & Beverage'} state={{Cat:'Food & Beverage'}}>Food & Beverage</Link></li>
      <li><Link className='Link' to={'/courses/Gaming'} state={{Cat:'Gaming'}}>Gaming</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Photography & Video'}state={{Cat:"Photography & Video"}}className='Link'>Photography & Video</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Digital Photography'} state={{Cat:'Digital Photography'}}>Digital Photography</Link></li>
      <li><Link className='Link' to={'/courses/Photography'} state={{Cat:'Photography'}}>Photography</Link></li>
      <li><Link className='Link' to={'/courses/Commercial Photography'} state={{Cat:'Commercial Photography'}}>Commercial Photography</Link></li>
      <li><Link className='Link' to={'/courses/Photography Tools'} state={{Cat:'Photography Tools'}}>Photography Tools</Link></li>
      <li><Link className='Link' to={'/courses/Portrait Photography'} state={{Cat:'Portrait Photography'}}>Portrait Photography</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Music & Arts'}state={{Cat:"Music"}}className='Link'>Music & Arts</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Instruments'} state={{Cat:'Instruments'}}>Instruments</Link></li>
      <li><Link className='Link' to={'/courses/Vocal'} state={{Cat:'Vocal'}}>Vocal</Link></li>
      <li><Link className='Link' to={'/courses/Music Techniques'} state={{Cat:'Music Techniques'}}>Music Techniques</Link></li>
      <li><Link className='Link' to={'/courses/Music Production'} state={{Cat:'Music Production'}}>Music Production</Link></li>
      <li><Link className='Link' to={'/courses/ Music Fundamentals'} state={{Cat:'Music Fundamentals'}}> Music Fundamentals</Link></li>
      </ul>
    </li>
    <li>
    <Link to={'/courses/Health & Fitness'}state={{Cat:"Health & Fitness"}}className='Link'>Health & Fitness</Link> 

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Fitness'} state={{Cat:'Fitness'}}>Fitness</Link></li>
      <li><Link className='Link' to={'/courses/Sports'} state={{Cat:'Sports'}}>Sports</Link></li>
      <li><Link className='Link' to={'/courses/Yoga'} state={{Cat:'Sports'}}>Sports</Link></li>
      <li><Link className='Link' to={'/courses/Nutrition & Diet'} state={{Cat:'Nutrition & Diet'}}>Nutrition & Diet</Link></li>
      <li><Link className='Link' to={'/courses/General Health'} state={{Cat:'General Health'}}>General Health</Link></li>
      </ul>
    </li>
    <li>
  <Link to={'/courses/Teaching & Academic'}state={{Cat:"Teaching & Academics"}}className='Link'>Teaching & Academics</Link>

      <ul className="submenu">
      <li><Link className='Link' to={'/courses/Engineering'} state={{Cat:'Engineering'}}>Engineering</Link></li>
      <li><Link className='Link' to={'/courses/Humanities'} state={{Cat:'Humanities'}}>Humanities</Link></li>
      <li><Link className='Link' to={'/courses/Math'} state={{Cat:'Math'}}>Math</Link></li>
      <li><Link className='Link' to={'/courses/Science'} state={{Cat:'Science'}}>Science</Link></li>
      <li><Link className='Link' to={'/courses/Online Education'} state={{Cat:'Online Education'}}>Online Education</Link></li>
      </ul>
    </li>
   </ul>
</nav>
      </div> 
          </div>
          

          </div>
        </div>
       
       
        </div>
       
        <span><img src='https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png' alt='lens' onClick={Search} /></span><input className='Search_Bar'type='text' name='keyword' value={search.keyword} placeholder='Search for anything' onChange={InputHandler} />
       <div className='Cart_Tech_Box'>
       <div className='TecOnUdemy'><p>Udemy Business</p></div>
        <div className='TecOnUdemy' onClick={()=>navigate('/teaching/Udemy')}><p >Tech on Udemy</p></div>
        <div className={token?"TecOnUdemy":'block'}><p onClick={()=>navigate('/home/my-courses/learning/')}>My Learning</p></div>
        <img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3264057/shopping-cart-icon-md.png' alt='cart_image' onClick={()=>navigate('/AddtoCart')}/><span className={token?"cart_count":'block'}>{CartCount}</span>
       </div>
        <div className='Login_SignUp_Box'>
        <div className={token?"block":'loginBox'} onClick={()=>navigate('/join/login-popup')}><p>Log in</p></div>
        <div className={token?"block":'loginBox Signup'}onClick={()=>navigate('/join/signup-popup')}><p>Sign up</p></div>
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-heart-1161-457786.png' className={token?"":'block'} alt='bell'/>
        <div className={token?"Profile":'block'}><p>{getFirstLetters(UserName)}</p>
        
        <div className='list'>  
        <div className='section_profile'>
          <div className='Profile_Logo'>{getFirstLetters(UserName)}</div>
          <div>
            <p style={{fontWeight:'bold',fontSize:18}}>{UserName}</p>
            <p style={{fontSize:12,color:'grey'}}>{UserEmail}</p>
          </div>
          
        </div><hr/>
        <p onClick={()=>navigate('/home/my-courses/learning/')}>My Learning</p><hr/>
       <p onClick={()=>navigate('/AddtoCart')}>Add to cart</p><hr/>
      <p onClick={Logout}>Log out</p>
        
        </div>
        </div>
       
        </div>
        
</div>
    
    </>
  )
}

export default Header