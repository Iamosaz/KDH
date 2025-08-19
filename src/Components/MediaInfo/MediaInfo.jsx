import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

import "./MediaInfo.css";
import MediaCard from "../MediaCard/MediaCard";

// 📂 Import images
import future1 from "../Assets/FutureStk.jpeg";
import future2 from "../Assets/FuturePic.jpeg";
import future3 from "../Assets/Future1.jpeg";

import pastP1 from "../Assets/Program1.jpeg";
import pastP2 from "../Assets/Program2.jpeg";
import pastP3 from "../Assets/Program3.jpeg";
import pastP4 from "../Assets/LoveP.jpeg";
import pastP5 from "../Assets/LagosP6.jpeg";

import canada1 from "../Assets/PastP3.jpeg";
import canada2 from "../Assets/PastP2.jpeg";
import canada3 from "../Assets/PastP4.jpeg";
import canada4 from "../Assets/PastP1.jpeg";
import canada5 from "../Assets/PastP5.jpeg";

import outreach1 from "../Assets/Program8.jpeg";
import outreach2 from "../Assets/Program7.jpeg";
import outreach3 from "../Assets/Program15.jpeg";
import outreach4 from "../Assets/Program10.jpeg";
import outreach5 from "../Assets/Dom1.jpeg";
import outreach6 from "../Assets/Dom2.jpeg";
import outreach7 from "../Assets/Modupe3.jpeg";

// 🎥 Local videos
import video1 from "../Assets/KDHVideo.mp4";
import video2 from "../Assets/KDHVideo1.mp4";
import video3 from "../Assets/KDHVideo2.mp4";
import video4 from "../Assets/Modupe.mp4";
import video5 from "../Assets/LagosP1.mp4";
import video6 from "../Assets/Lagosp2.mp4";
import video7 from "../Assets/LagosP3.mp4";
import video8 from "../Assets/LagosP4.mp4";
import video9 from "../Assets/LagosP5.mp4";
import video10 from "../Assets/KDHVideo5.mp4";

// 🎬 Define all gallery sections
const sections = [
  {
    title: "Future Strikers – Summer Camp Toronto, Canada (August 2025)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: future1, title: "Future Strickers- Summer camp 2025", description: "Summer camp 2025" },
      { type: "image", src: future2, title: "Future Strickers- Summer camp 2025", description: "Summer camp 2025" },
      { type: "image", src: future3, title: "Future Strickers", description: "Summer camp 2025" },
      { type: "video", src: video1, title: "Football practice session - Summer camp 2025", description: "Summer camp 2025" },
      { type: "video", src: video2, title: "Kids in training - Summer camp 2025", description: "Summer camp 2025" },
    ],
  },
  {
    title: "PROJECT LOVE IN ACTION 2.0 - Toronto, Canada (December 2024)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: canada1, title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "image", src: canada2, title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "image", src: canada3, title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "image", src: canada4, title: "Winter donations and Gifting - Toronto", description: "Project Loves" },
      { type: "image", src: canada5, title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "video", src: video3, title: "Christmas Gifting from Santa", description: "Project Love" },
      { type: "video", src: video10, title: "Christmas Gifting from Santa", description: "Project Love" },
    ],
  },
  {
    title: "PROJECT LOVE IN ACTION - Lagos, Nigeria (December 2024)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: pastP1, title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: pastP2, title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: pastP3, title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: pastP4, title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: pastP5, title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "video", src: video5, title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: video6, title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: video7, title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: video8, title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: video9, title: "Community Outreach Clip", description: "Project Love" },
    ],
  },
  {
    title: "PROJECT MAKE A DIFFERENCE - Lagos, Nigeria (July 2024)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: outreach1, title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: outreach2, title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: outreach3, title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: outreach4, title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: outreach5, title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: outreach6, title: "Charity Outreach to Modupe Cole Memorial Child Care ", description: "Modupe" },
      { type: "image", src: outreach7, title: "Charity Outreach to Modupe Cole Memorial Child Care ", description: "Modupe" },
      { type: "video", src: video4, title: "Interview Session with a Staff at Modupe Cole", description: "Modupe" },
    ],
  },
];

const MediaInfo = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  const openLightbox = (items, startIndex) => {
    const formattedSlides = items.map((item) =>
      item.type === "image"
        ? { src: item.src, description: `${item.title} - ${item.description}` }
        : {
            type: "video",
            sources: [{ src: item.src, type: "video/mp4" }], // ✅ video source
            description: `${item.title} - ${item.description}`,
          }
    );
    setSlides(formattedSlides);
    setIndex(startIndex);
    setOpen(true);
  };

  return (
    <>
      {sections.map((section, sIndex) => (
        <div key={sIndex}>
          <div className="media-hero-section">
            <h1>{section.title}</h1>
            <p>{section.description}</p>
          </div>
          <div className="media-grid">
            {section.items.map((item, i) => (
              <div key={i} onClick={() => openLightbox(section.items, i)}>
                <MediaCard
                  img={item.src} // 👈 No more thumbnails, videos just show as video
                  title={item.title}
                  isVideo={item.type === "video"}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Video]}
      />
    </>
  );
};

export default MediaInfo;
