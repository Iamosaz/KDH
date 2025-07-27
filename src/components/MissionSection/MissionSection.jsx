import React from 'react'
import './MissionSection.css'

const MissionSection = () => {
  return (
    <section className='mission-section'>
       <div className='mission-container'>
         <div className='mission-header'>
           <h2>Our Mission</h2>
           {/* underline effect */}
           <div className='underline'></div>
           <p>At Kids Dream Haven (KDH) we strive to put smiles on the faces of children,love ones and thier families. Especial during festive seasons and difficult seasons,by spreading joy and providing essential support to them.</p>
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

export default MissionSection
