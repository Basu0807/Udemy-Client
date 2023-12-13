import React from 'react'
import Footer from '../Layouts/Footer'

const TechonUdemy = () => {
  return (
    <>
    <div className='TechOnUdemy'>
        <div className='TechOnUdemy_img'>
            <div className='inner_text'>
            <h1>Come teach with us</h1>
            <p>Become an instructor and change lives — including your own</p>
            </div>
        </div>
        <div className='Tech_On_reason'>
            <h1>So many reasons to start</h1>
            <div className='reason_tostart'>
            <div className='reason_box'>
                <img src='https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg' alt='img'/>
                <h3>Teach your way</h3>
                <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
            </div>
            <div className='reason_box'>
                <img src='https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg' alt='img'/>
                <h3>Inspire learners</h3>
                <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
            </div>
            <div className='reason_box'>
                <img src='https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg' alt='img'/>
                <h3>Get rewarded</h3>
                <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
            </div>
            </div>
        </div>
        <div className='number_box'>
            <div className='student_numbers'>
                <h1>62M</h1>
                <p>Students</p>
            </div>
            <div className='student_numbers'>
                <h1>75+</h1>
                <p>Languages</p>
            </div>
            <div className='student_numbers'>
                <h1>830M</h1>
                <p>Enrollments</p>
            </div>
            <div className='student_numbers'>
                <h1>180+</h1>
                <p>Countries</p>
            </div>
            <div className='student_numbers'>
                <h1>15000+</h1>
                <p>Enterprise customers</p>
            </div>
        </div>
     <div className='top_inst_box'>
     <div className='top_inst'>
            <img src='https://s.udemycdn.com/teaching/instructors/en/frank-2x-v2.jpg' alt='img'/>
            <div>
            <p style={{fontSize:25}}>“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
            <br/><br/>
<b>Frank Kane</b>
<p>Data Science & IT Certifications</p>
            </div>
        </div>
     </div>
     <div  className='Become_inst_box'>
     <div className='get_started'>
        <h1>Become an instructor today</h1>
        <p>Join one of the world’s largest online learning marketplaces.</p>
        <button>Get started</button>
     </div>
     </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default TechonUdemy