import React from "react";
import "./MediaCard.css";

const MediaCard = ({ img, title, isVideo }) => {
  return (
    <div className="media-card">
      <div className="media-card-img-wrapper">
        {isVideo ? (
          <video
            src={img}
            className="media-card-video"
            muted
            playsInline
          />
        ) : (
          <img src={img} alt={title} className="media-card-img" />
        )}

        {/* Play icon overlay for videos */}
        {isVideo && <div className="media-card-play-icon">▶</div>}
      </div>

      <div className="media-card-title">{title}</div>
    </div>
  );
};

export default MediaCard;
