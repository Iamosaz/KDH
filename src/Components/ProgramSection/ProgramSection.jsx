// ProgramPage.jsx
import React from 'react';
import './ProgramSection.css';
import program1 from '../Assets/FutureSt.jpeg';
import program2 from '../Assets/Program8.jpeg';
import pastProgram from '../Assets/PastP2.jpeg';
import otherprogram from '../Assets/Program1.jpeg';
import { Link } from 'react-router-dom';

const ProgramSection = () => {
  return (
    <section className="program-page">
      <h1 className="kdh">Kids Dream Haven</h1>
      <div className="underline"></div>
      <div className="program-container">
        {/* Program Cards */}
        <div className="program-grid">
          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${program1})` }}
            >
              <div className="program-overlay-title">Future Program</div>
            </div>
            <div className="program-details">
              <h3>Future Strikers</h3>
              <p>
                Future Strikers – Summer Camp 2025 ⚽ Get ready for an
                unforgettable summer! Kids Dream Haven is thrilled to announce
                our upcoming "Future Strikers" Summer Camp a dynamic and
                engaging program designed to empower kids through fun, fitness,
                and creativity. This camp is more than just a way to spend the
                holidays—it's an opportunity for children to build confidence,
                develop new skills, make lasting friendships, and be part of
                something truly inspiring. Packed with exciting activities such
                as sports, team games, creative arts, confidence-building
                workshops, and daily inspiration, Future Strikers is open to all
                children ages 6 and above. We believe every child is a future
                leader and champion—and this camp is where they start their
                journey. Don’t miss out on this life-shaping experience coming
                this summer—let's shape tomorrow’s stars today!
              </p>
              <a href="/programs/future" className="program-btn">
                View Program
              </a>
            </div>
          </div>

          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${otherprogram})` }}
            >
              <div className="program-overlay-title">Other Program</div>
            </div>
            <div className="program-details">
              <h3>PROJECT LOVE IN ACTION - Lagos, Nigeria (December 2024)</h3>
              <p>
                In December 2024, Kids Dream Haven Foundation carried out
                Project Love in Action in Lagos, Nigeria, with the heartfelt
                goal of spreading joy, dignity, and the spirit of Christmas to
                families facing financial hardship. Understanding that many
                families in underserved communities struggle to afford even the
                most basic festive meals, our team focused on restoring that
                holiday magic, especially for children. Through this initiative,
                500 live chickens were purchased and distributed, one chicken
                per child, ensuring that 500 families could experience the
                warmth and tradition of a home cooked Christmas meal. This act
                of love went beyond food, it represented hope, belonging, and
                the belief that every child deserves to feel seen, valued, and
                celebrated especially during the holidays. The excitement and
                gratitude in the eyes of the children and their families
                reminded us why we do what we do. Project Love in Action, is a
                testament to our commitment at Kids Dream Haven Foundation to
                support families in meaningful, culturally sensitive ways that
                honour their dignity and uplift their spirits.
              </p>
              <a href="/programs/other" className="program-btn">
                View Program
              </a>
            </div>
          </div>

          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${program2})` }}
            >
              <div className="program-overlay-title">Domestic Program</div>
            </div>
            <div className="program-details">
              <h3>PROJECT MAKE A DIFFERENCE - Lagos, Nigeria (July 2024)</h3>
              <p>
                Charity Outreach to Modupe Cole Memorial Child Care & Treatment
                Home School In July 2024, Kids Dream Haven Foundation launched
                Project Make a Difference with a heartfelt mission to support
                children living with disabilities. As part of this initiative,
                our team visited Modupe Cole, a special needs school located in
                Lagos, Nigeria. During our outreach, we provided the students
                and staff with a variety of much needed essentials. These
                included home cooked meals, school supplies, diapers,
                toiletries, and personal care items, all thoughtfully selected
                to bring comfort, dignity, and joy to the children. The visit
                was filled with warmth, gratitude, and shared smiles. It was
                more than a donation drive, it was a powerful reminder that
                every child, regardless of ability or circumstance, deserves
                care, love, and the opportunity to thrive. Project Make a
                Difference reflects Kids Dream Haven’s core mission: to uplift
                vulnerable communities through compassion, education, and
                meaningful support. This outreach to Modupe Cole was just one
                step in a broader journey of creating real, lasting impact one
                child at a time.
              </p>
              <a href="/programs/domestic" className="program-btn">
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
              <h3>
                {" "}
                PROJECT LOVE IN ACTION 2.0 - Toronto, Canada (December 2024)
              </h3>
              <p>
                PROJECT LOVE IN ACTION 2.0 - Toronto, Canada (December 2024) In
                December 2024, Kids Dream Haven Foundation brought holiday cheer
                to life through Project Love in Action – Toronto, creating a
                festive and joyful experience for children across the city. With
                over 350 brand new Christmas gifts, carefully wrapped in festive
                paper, our team set out to ensure that every child we
                encountered felt the warmth, magic, and generosity of the
                season. We began by partnering with a local church during their
                Christmas party, an event filled with music, laughter, and
                excited children aged 5 to 15. Each child received an age
                appropriate gift, handed to them with love and intention. To
                make the moment even more magical, our Director stepped into the
                role of Santa Claus literally. Wearing a Santa mask and full of
                festive spirit, he personally handed out the gifts to the
                children, bringing smiles, laughter, and pure excitement to the
                room. The children lit up as they received their presents from
                "Santa," adding a touch of enchantment to the already
                heartwarming event. But the joy didn’t end there. With remaining
                gifts in hand, our Santa-led team took the spirit of giving to
                Yorkdale Mall, where they surprised children with presents and
                joyful interactions, continuing the celebration beyond the
                church walls. Project Love in Action – Toronto was more than a
                gift distribution, it was a movement of love, joy, and human
                connection. It reminded families that even in a big city,
                kindness and community can still shine bright, especially during
                the most magical time of year.
              </p>
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
          <Link to="/volunteer" className="volunteer-btn1">
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
