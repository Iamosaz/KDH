import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

import "./MediaInfo.css";
import MediaCard from "../MediaCard/MediaCard";

// 🎬 Define all gallery sections with PUBLIC folder paths
const sections = [
  {
    title: "Future Strikers – Summer Camp Toronto, Canada (August 2025)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: "/images/FutureStk.jpeg", title: "Future Strickers - Summer camp 2025", description: "Summer camp 2025" },
      { type: "image", src: "/images/FuturePic.jpeg", title: "Future Strickers - Summer camp 2025", description: "Summer camp 2025" },
      { type: "image", src: "/images/Future1.jpeg", title: "Future Strickers", description: "Summer camp 2025" },
      { type: "video", src: "/videos/KDHVideo.mp4", title: "Football practice session - Summer camp 2025", description: "Summer camp 2025" },
      { type: "video", src: "/videos/KDHVideo1.mp4", title: "Kids in training - Summer camp 2025", description: "Summer camp 2025" },
    ],
  },
  {
    title: "PROJECT LOVE IN ACTION 2.0 - Toronto, Canada (December 2024)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: "/images/PastP3.jpeg", title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "image", src: "/images/PastP2.jpeg", title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "image", src: "/images/PastP4.jpeg", title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "image", src: "/images/PastP1.jpeg", title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "image", src: "/images/PastP5.jpeg", title: "Winter donations and Gifting - Toronto", description: "Project Love" },
      { type: "video", src: "/videos/KDHVideo2.mp4", title: "Christmas Gifting from Santa", description: "Project Love" },
      { type: "video", src: "/videos/KDHVideo5.mp4", title: "Christmas Gifting from Santa", description: "Project Love" },
    ],
  },
  {
    title: "PROJECT LOVE IN ACTION - Lagos, Nigeria (December 2024)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: "/images/Program1.jpeg", title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: "/images/Program2.jpeg", title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: "/images/Program3.jpeg", title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: "/images/LoveP.jpeg", title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "image", src: "/images/LagosP6.jpeg", title: "Community Outreach - Kids Dream Haven (2024)", description: "Lagos 2024" },
      { type: "video", src: "/videos/LagosP1.mp4", title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: "/videos/Lagosp2.mp4", title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: "/videos/LagosP3.mp4", title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: "/videos/LagosP4.mp4", title: "Community Outreach Clip", description: "Project Love" },
      { type: "video", src: "/videos/LagosP5.mp4", title: "Community Outreach Clip", description: "Project Love" },
    ],
  },
  {
    title: "PROJECT MAKE A DIFFERENCE - Lagos, Nigeria (July 2024)",
    description: "Snapshots from the event",
    items: [
      { type: "image", src: "/images/Program8.jpeg", title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: "/images/Program7.jpeg", title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: "/images/Program15.jpeg", title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: "/images/Program10.jpeg", title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: "/images/Dom1.jpeg", title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: "/images/Dom2.jpeg", title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "image", src: "/images/Modupe3.jpeg", title: "Charity Outreach to Modupe Cole Memorial Child Care", description: "Modupe" },
      { type: "video", src: "/videos/Modupe.mp4", title: "Interview Session with a Staff at Modupe Cole", description: "Modupe" },
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
            sources: [{ src: item.src, type: "video/mp4" }],
            preload: "none", // ✅ don’t preload video
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
                  img={item.src}
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
