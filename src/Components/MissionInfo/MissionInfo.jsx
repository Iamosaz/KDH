import React from 'react'
import './MissionInfo.css'

const MissionInfo = () => {
  return (
    <section className='mission-section'>
       <div className='mission-container'>
         <div className='mission-header'>
           <h2>Our Mission</h2>
           {/* underline effect */}
           <div className='underline'></div>
           <p>At Kids Dream Haven Foundation (KDH), our mission is to bring joy, hope, and essential support to children and their families, especially during festive and challenging seasons. We are committed to putting smiles on their faces by spreading kindness, uplifting spirits, and making meaningful impact in their lives.</p>
         </div>

         <div className='impact-stats'>
           <div className='stat-box'>
             <h3>2+</h3>
             <p>Years of impact</p>
           </div>

           <div className='stat-box'>
              <h3>1000+</h3>
              <p>Lives Touched</p>
           </div>

           <div className='stat-box'>
              <h3>50+</h3>
              <p>Volunteers</p>
           </div>

         </div>
       </div>
    </section>
  );
};

export default MissionInfo
