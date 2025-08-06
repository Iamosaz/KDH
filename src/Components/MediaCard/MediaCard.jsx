import React from 'react';
import './MediaCard.css';

const MediaCard = ({ img, title }) => {
  return (
    <div className="media-card">
      <img src={img} alt={title} className="media-card-img" />
      <div className="media-card-title">{title}</div>
    </div>
  );
};

export default MediaCard;
