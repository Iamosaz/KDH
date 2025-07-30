import React from 'react';
import { Link } from 'react-router-dom';
import './TheMovement.css';
import movement1 from '../Assets/movement1.jpg';
import movement2 from '../Assets/movement2.jpg';
import movement3 from '../Assets/movement3.jpg';

const TheMovement = () => {
  const cards = [
    {
      image: movement1,
      overlayTitle: 'Oakville',
      subTitle: 'Hospital Bills Support',
      description: 'This initiative aims to relieve the financial burden on families with children with health issues...',
      link: '/movement/hospital-support'
    },
    {
      image: movement2,
      overlayTitle: 'Ontario',
      subTitle: 'Feeding 2000 Kids',
      description: 'This event is organized during the holiday season...',
      link: '/movement/feeding-kids'
    },
    {
      image: movement3,
      overlayTitle: 'Brampton',
      subTitle: 'Support for Widows',
      description: 'In addition to supporting children, we also cater to widows...',
      link: '/movement/support-widows'
    },
  ];

  return (
    <section className="join-section">
      <h2 className="join-title">Join</h2>
      <h1 className="kdh">Kids Dream Haven</h1>
      <div className="underline"></div>
      <div className="join-grid">
        {cards.map((card, index) => (
          <div className="join-card" key={index}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="card-overlay-title">{card.overlayTitle}</div>
            </div>
            <div className="card-details">
              <h3>{card.subTitle}</h3>
              <p>{card.description}</p>
              <Link to={card.link} className="learn-btn">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheMovement;
