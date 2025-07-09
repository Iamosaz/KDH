import React from 'react'
import './JoinMovement.css'
import movement1 from '../Assets/movement1.jpg'
import movement2 from '../Assets/movement2.jpg'
import movement3 from '../Assets/movement3.jpg'

const JoinMovement = () => {

     const cards = [
      {
      image: movement1,
      overlayTitle: 'Oakville',
      subTitle: 'Hospital Bills Support',
      description: 'THis initiative aims to relieve the financial burdern on families with children with health issues. We ensure that thier children recieve the necessary and proper medical care and treatment and we cover all the hospital bills.',
    },

     {
       image: movement2,
       overlayTitle: 'Ontario',
       subTitle: 'Feeding 2000 Kids',
       description: 'This event is organize during the Hoilday season. KDH organize a grand feast, to feed 2000 childrem with nutritious meals. The aim of this , is to ensure that every child experiences the joy and warmth of the Season.',
     },

      {
      image: movement3,
      overlayTitle: 'Brampton',
      subTitle: 'Support for Widows',
      description: 'In addition to supporting children, we also carter and provide food, clothing and financial assistance to wisdows in our different communities. We aim to spread the spirit of giving and ensuring that these women and their love ones have a joyous hoiliday season',
    },

     ];

  return (
   <section className="join-section">
      <h2 className="join-title">Join</h2>
      <h1 className='kdh'>Kids Dream Haven</h1>
        <div className='underline'></div>
      <div className="join-grid">
        {cards.map((card, index) => (
          <div className="join-card" key={index}>
            <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}>
              <div className="card-overlay-title">{card.overlayTitle}</div>
            </div>
            <div className="card-details">
              <h3>{card.subTitle}</h3>
              <p>{card.description}</p>
              <a href="#" className="learn-btn">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinMovement
