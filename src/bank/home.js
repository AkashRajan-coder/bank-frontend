import React from 'react';
import './home1.css';
import bankVideo from '../asset/bank4.mp4'; 

function Home() {
  return (
    <div className="home-container">
     
      <video autoPlay loop muted className="bg-video">
        <source src={bankVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="overlay">
        <h1>Akash Bank</h1>
        <p>Most Trustable Bank</p>
        

        
      </div>
    </div>
  );
}

export default Home;
