import React from 'react';
import './MediaInfo.css';
import MediaCard from '../MediaCard/MediaCard';

// Import images (make sure these files exist in your src/Components/Assets folder)
import future1 from '../Assets/FutureStk.jpeg';
import future2 from '../Assets/Strongerfuture.jpeg';
import future3 from '../Assets/Future1.jpeg';
import pastP1 from '../Assets/Program1.jpeg';
import pastP2 from '../Assets/Program2.jpeg';
import pastP3 from '../Assets/Program3.jpeg';
import canada1 from '../Assets/PastP3.jpeg';
import canada2 from '../Assets/PastP2.jpeg';
import canada3 from '../Assets/PastP4.jpeg';
import outreach1 from '../Assets/Program8.jpeg';
import outreach2 from '../Assets/Program7.jpeg';
import outreach3 from '../Assets/Program15.jpeg';
// import outreach4 from '../Assets/Program4.jpeg';


// Section 1:  Future Strikers – Summer Camp 2025 - Toronto
const FutreStrickers = [
  { img: future1, title: " Future Strikers – Summer Camp 2025" },
  { img: future2, title: "  Future Strikers – Summer Camp 2025 " },
  {img: future3, title: " Future Strikers – Summer Camp 2025 " },
];

// Section 1: Project Love in Action - Toronto
const charityMedia = [
  { img: outreach1, title: "Charity Outreach to Modupe Cole Memorial Child Care" },
  { img: outreach2, title: " Charity Outreach to Modupe Cole Memorial Child Care" },
  {img: outreach3, title: "Charity Outreach to Modupe Cole Memorial Child Care" },
  // {img: outreach4, title: "Charity Outreach to Modupe Cole Memorial Child Care" },
];

// Section 2: Delta Academy
const outreachMedia = [
  { img: pastP1, title: "Community Outreach – Kids Dream Haven (2024)" },
  { img: pastP2, title: "Community Outreach – Kids Dream Haven (2024)" },
  { img: pastP3, title: "Community Outreach – Kids Dream Haven (2024)" },
];

// Section 3: Outreach Programs
const torontoMedia = [
  { img: canada1, title: "Winter Donations and Gifting – Toronto" },
  { img: canada2, title: "Winter Donations and Gifting – Toronto" },
  { img: canada3, title: "Winter Donations and Gifting – Toronto" },
];

const MediaInfo = () => {
  return (
    <>
    {/* Section 1 - Toronto future strickers */}
      <div className="media-hero-section">
        <h1>Future Strikers – Summer Camp Toronto, Canada (August 2025)</h1>
        <p>Snapshots from the event</p>
      </div>
      <div className="media-grid">
        {FutreStrickers.map((item, i) => (
          <MediaCard key={`charity-${i}`} img={item.img} title={item.title} />
        ))}
      </div>

      {/* Section 2 - Toronto */}
      <div className="media-hero-section">
        <h1>PROJECT MAKE A DIFFERENCE - Lagos, Nigeria (July 2024)</h1>
        <p>Snapshots from the event</p>
      </div>
      <div className="media-grid">
        {charityMedia.map((item, i) => (
          <MediaCard key={`charity-${i}`} img={item.img} title={item.title} />
        ))}
      </div>

      {/* Section 3 - Delta Academy */}
      <div className="media-hero-section">
        <h1>PROJECT LOVE IN ACTION - Lagos, Nigeria (December 2024)</h1>
        <p>Snapshots from the event</p>
      </div>
      <div className="media-grid">
        {outreachMedia.map((item, i) => (
          <MediaCard key={`outreach-${i}`} img={item.img} title={item.title} />
        ))}
      </div>

      {/* Section 4 - Outreach */}
      <div className="media-hero-section">
        <h1>PROJECT LOVE IN ACTION 2.0 - Toronto, Canada (December 2024)</h1>
        <p>Snapshots form the event</p>
      </div>
      <div className="media-grid">
        {torontoMedia.map((item, i) => (
          <MediaCard key={`toronto-${i}`} img={item.img} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default MediaInfo;
