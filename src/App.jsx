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

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "three.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "four.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "five.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "six.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "seven.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "eight.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "nine.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "ten.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "eleven.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "twelve.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirteen.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "fourteen.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fifteen.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "sixteen.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "seventeen.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "eighteen.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "nineteen.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "twenty.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentyone.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentytwo.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentythree.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentyfour.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentyfive.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentysix.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentyseven.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentyeight.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "twentynine.png" className='one-img'/>
     </div>

     <div ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirty.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtyone.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtytwo.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtythree.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtyfour.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtyfive.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtysix.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtyseven.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtyeight.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "thirtynine.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "forty.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortyone.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortytwo.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortythree.png" className='one-img'/>
     </div>

     
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortyfour.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortyfive.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortysix.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortyseven.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortyeight.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fortynine.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fifty.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fiftyone.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fiftytwo.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fiftythree.png" className='one-img'/>
     </div>
     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fiftyfour.png" className='one-img'/>
     </div>

     <div  ref={loadMoreRef} className='page-two-bg'>
      <img src= "fiftyfive.png" className='one-img'/>
     </div>
    </>
  )
}

export default App
