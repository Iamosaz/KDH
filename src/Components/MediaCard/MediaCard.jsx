import React, { useRef } from "react";
import "./MediaCard.css";

const MediaCard = ({ img, title, isVideo }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="media-card">
      <div className="media-card-img-wrapper" onClick={handlePlay}>
        {isVideo ? (
          <video
            ref={videoRef}
            src={img}
            className="media-card-video"
            muted
            playsInline
            controls   // ✅ show play/pause controls
            preload="metadata" // ✅ load only metadata until clicked
            poster="/images/video-placeholder.jpg" // optional fallback image
          />
        ) : (
          <img
            src={img}
            alt={title}
            className="media-card-img"
            loading="lazy"
          />
        )}

        {/* Play icon overlay for videos */}
        {isVideo && <div className="media-card-play-icon">▶</div>}
      </div>

      <div className="media-card-title">{title}</div>
    </div>
  );
};

export default MediaCard;
