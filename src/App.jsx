import React, { useEffect, useRef } from 'react';
import './App.css'

function App() {
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Fetch more content or load additional data here
          console.log('Load more content');
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1, // Adjust as needed
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    // Clean up observer
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []); // Run effect only once on component mount

  return (
    <>
     <div className='page-one-bg'>
      <img src= "one.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "two.png" className='one-img'/>
     </div>

     <div className='page-two-bg'>
      <img src= "three.png" className='one-img'/>
     </div>

     <div className='page-two-bg'>
      <img src= "four.png" className='one-img'/>
     </div>

     <div className='page-two-bg'>
      <img src= "five.png" className='one-img'/>
     </div>

     <div className='page-two-bg'>
      <img src= "six.png" className='one-img'/>
     </div>

     <div className='page-two-bg'>
      <img src= "seven.png" className='one-img'/>
     </div>

     <div className='page-two-bg'>
      <img src= "eight.png" className='one-img'/>
     </div>

     <div className='page-two-bg'>
      <img src= "nine.png" className='one-img'/>
     </div>
    </>
  )
}

export default App
