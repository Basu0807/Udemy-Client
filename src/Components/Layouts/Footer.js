import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_detail_box'>
        <div className='About_udemy'>
          <ul>
            <li>Udemy Business</li>
            <li>Tech on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='Udemy_Logo'/>
        </div>
        <div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and  Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
      </div>

      <div className='footer_lang'>
        <div className='language_box'>
          <img src='https://i.pinimg.com/originals/1e/96/21/1e9621ac8310c1b6e7d78a6ad7f9f744.png' alt='glob'/>
          <p>English</p>
          </div>
        <div>© 2023 Udemy,Inc.</div>
      </div>

    </div>
  )
}

export default Footer