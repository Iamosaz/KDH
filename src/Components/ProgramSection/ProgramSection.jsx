// ProgramPage.jsx
import React from 'react';
import './ProgramSection.css';
import program1 from '../Assets/Program8.jpeg';
import program2 from '../Assets/FutureSt.jpeg';
import pastProgram from '../Assets/camp.jpeg';

const ProgramSection = () => {
  return (
    <section className="program-page">
      <div className="program-container">
        {/* Program Cards */}
        <div className="program-grid">
          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${program1})` }}
            >
              <div className="program-overlay-title">Domestic Program</div>
            </div>
            <div className="program-details">
              <h3>Make a Difference – Charity Outreach</h3>
              <p>As part of our ongoing commitment to community service and social impact, Kids Dream Haven proudly carried out the "Make a Difference" initiative—an outreach project focused on supporting those in need. During this charity effort, we visited Module Cole, where we donated a variety of essential items including food supplies, cleaning products, and hygiene essentials to help improve the daily living conditions of the residents. Our team spent time engaging with the community, listening to their stories, and sharing words of encouragement. The visit wasn’t just about the items we brought, but also about showing compassion, presence, and solidarity. Volunteers from our organization worked together to pack, deliver, and distribute the donations, creating a warm, meaningful experience for everyone involved. This project served as a reminder of how small acts of kindness can collectively make a big difference, and we remain dedicated to continuing similar charitable activities that uplift and empower vulnerable communities.</p>
              <a href="/programs/domestic" className="program-btn">
                View Program
              </a>
            </div>
          </div>

          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${program2})` }}
            >
              <div className="program-overlay-title">Future Program</div>
            </div>
            <div className="program-details">
              <h3>Future Strikers</h3>
              <p>Future Strikers – Summer Camp 2025 ⚽
                Get ready for an unforgettable summer! Kids Dream Haven is thrilled to announce our upcoming "Future Strikers" Summer Camp—a dynamic and engaging program designed to empower kids through fun, fitness, and creativity. This camp is more than just a way to spend the holidays—it's an opportunity for children to build confidence, develop new skills, make lasting friendships, and be part of something truly inspiring. Packed with exciting activities such as sports, team games, creative arts, confidence-building workshops, and daily inspiration, Future Strikers is open to all children ages 6 and above. We believe every child is a future leader and champion—and this camp is where they start their journey. Don’t miss out on this life-shaping experience coming this summer—let's shape tomorrow’s stars today!</p>
              <a href="/programs/international" className="program-btn">
                View Program
              </a>
            </div>
          </div>

          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${pastProgram})` }}
            >
              <div className="program-overlay-title">Past Program</div>
            </div>
            <div className="program-details">
              <h3>March Break Camp</h3>
              <p>This past March break, Kids Dream Haven successfully hosted an exciting and memorable camp experience that brought together creativity, learning, and endless fun for children aged 6 and above. The camp was filled with a wide range of engaging activities, including arts and crafts, storytelling sessions, team games, and creative workshops that encouraged self-expression and teamwork. Each day began with a warm welcome and a healthy breakfast, followed by interactive sessions designed to spark curiosity and imagination. Campers also enjoyed nutritious lunch breaks, creating space to recharge and socialize. From painting and sculpting to group challenges and hands-on projects, every child had the opportunity to explore new skills and make lasting memories. The energy, laughter, and creativity that filled the air truly made this March Break Camp an unforgettable experience for all who attended.</p>
              <a href="/programs/past" className="program-btn">
                View Program
              </a>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="support-section">
          <h2>Support Our Cause</h2>
          <p>Become part of a passionate mission to impact lives at KDH.</p>
          <a href="/volunteer" className="volunteer-btn1">
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
