import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Footer from '../Layouts/Footer'

// import { useSelector } from 'react-redux'
import axios from 'axios'

const MyLearning = () => {
  const [orderedItems, setOrderedItems] = useState([]);
  // console.log(orderedItems);
  const navigate =useNavigate()
const email =localStorage.getItem('UserEmail')
// console.log(email);

useEffect(() => {
  const fetchOrderedItems = async () => {
    try {
      // Replace 'userEmail' with the actual email ID you want to fetch items for
      const userEmail = email; // Replace with the desired email ID
      const response = await axios.get(`https://udemy-server-h44n.onrender.com/my/courses/${userEmail}`); // Pass the email ID in the URL
  
      setOrderedItems(response.data);
    } catch (error) {
      console.error('Error fetching ordered items:', error);
    }
  };
  fetchOrderedItems();
}, [email]);

 
    return (
    <>
      {orderedItems.length !== 0 ? (
        <div className='Cart_Container'>
          {/* Your content to display ordered items */}
          <h1>My Learning</h1>
          <br />
          <div className='Learning_Container'>
            {/* Display ordered items */}
            {orderedItems.map((item, index) => (
              <div key={index} className='added_course_container'>
                <img src={item.image} alt='course_img' />
                <div className='product_details'>
                  <h3>{item.topic}</h3>
                  <p>{item.instructor}</p>
                  <p style={{ fontWeight: 'bold' }}>
                    {item.rating} stars <span> (2175)</span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    {item.duration} Total hours. {item.lectures} lectures. All levels
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='Cart_Container'>
          {/* Display when there are no ordered items */}
          <h1>My Learning</h1>
          <br />
          <div className='empty_container'>
            <img src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg' alt='empty_cart' />
            <p>Your don't have any courses in your learning. Keep shopping to find a course!</p>
            <br />
            <div className='Keep_Shopping' onClick={() => navigate('/')}>
              Add Courses
            </div>
          </div>
        </div>
      )}

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default MyLearning