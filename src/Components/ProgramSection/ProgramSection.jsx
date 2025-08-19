// ProgramPage.jsx
import React from "react";
import "./ProgramSection.css";
import program1 from "../Assets/FuturePic.jpeg";
import domestic from "../Assets/Modupe1.jpeg";
import marchbreak from "../Assets/March1.jpeg";
import pastProgram from "../Assets/PastP2.jpeg";
import otherprogram from "../Assets/Program1.jpeg";
import { Link } from "react-router-dom";

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
              <h3>
                PROJECT FUTURE STRIKERS - Summer Camp, Creditview park,
                Brampton, Canada (July- August 2025)
              </h3>
              <p>
                Kids Dream Haven Foundation proudly hosted Project Future
                Strikers, a free summer camp designed to empower children
                through the joy of sports and skill development. Held at
                Creditview Park in Brampton, the program welcomed kids of all
                skill levels, offering them the chance to learn, grow, and shine
                in a supportive environment. Our mission for Project Future
                Strikers is to nurture both physical and mental strength while
                building teamwork, confidence, and resilience in young athletes.
                Throughout the summer, participants trained in soccer, long
                tennis, basketball, mind strength, and physical strength
                activities to enhance their skills, discipline, and love for the
                game. This initiative not only helped children improve their
                athletic abilities but also provided a safe space for them to
                make friends, stay active, and discover new passions. Parents
                expressed their appreciation for a program that was not only
                educational and fun but also completely free, making it
                accessible to families from all walks of life. The smiles,
                laughter, and determination we witnessed over these weeks are a
                testament to the impact of community driven initiatives. Project
                Future Strikers stands as a reminder that when given the
                opportunity, every child can dream big, work hard, and achieve
                greatness, both on and off the field.
              </p>
              <a href="/programs/future" className="program-btn">
                View Program
              </a>
            </div>
          </div>

          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${marchbreak})` }}
            >
              <div className="program-overlay-title">March Break</div>
            </div>
            <div className="program-details">
              <h3>MARCH BREAK - Toronto, Ontario (March 2025)</h3>
              <p>
                Fun & Creative Activities for Boys & Girls Kids Dream Haven
                Foundation hosted an exciting March Break Camp designed to keep
                children ages 6 and up engaged, inspired, and active during
                their school break. The week was packed with fun filled, hands
                on activities that encouraged creativity, learning, and
                friendship. Campers enjoyed: -Breakfast & lunch provided daily
                -Free customized camp T-shirts -Arts & crafts projects -A one
                day field trip -Cooking classes -DIY projects -STEM activities
                and much more! Our program was built to offer a safe, inclusive,
                and supportive environment where kids could explore their
                talents, try new skills, and make lasting memories. Whether they
                were painting, cooking, building, or exploring on our field
                trip, every child left with a smile and a sense of
                accomplishment. At Kids Dream Haven Foundation , we believe
                school breaks are an opportunity for growth, exploration, and
                joy, and our March Break Camp brought that to life in the best
                way possible.
              </p>
              <a href="/programs/march" className="program-btn">
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
                Project Love in Action 2.0 – Toronto December 2024 was pure
                magic for Kids Dream Haven Foundation as we brought Project Love
                in Action to Toronto. Over 350 brand-new Christmas gifts,
                wrapped in sparkling paper, were given out with one mission
                spread joy, wonder, and the true spirit of giving. We began at a
                local church’s Christmas party, where laughter filled the air
                and children aged 5 to 15 received thoughtful, age appropriate
                presents. To make it unforgettable, our Director stepped in as
                Santa Claus, delivering each gift with smiles, giggles, and
                holiday magic. Then, with more gifts in hand, our Santa led crew
                brought surprise presents to Yorkdale Mall turning an ordinary
                day into unforgettable Christmas memories. Project Love in
                Action – Toronto wasn’t just about presents—it was about
                connection, kindness, and proving that even in a busy city, the
                holiday spirit can shine brighter than ever.
              </p>
              <a href="/programs/past" className="program-btn">
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
                Project Love in Action – Christmas 2024 Last December in Lagos,
                Kids Dream Haven Foundation brought the true spirit of Christmas
                to life for 500 families in need. With love at the heart of our
                mission, we delivered one live chicken to every child a simple
                gift that meant a warm, home cooked festive meal for each
                family. For many, it was more than food it was dignity, joy, and
                the feeling of being seen and valued. The laughter of children,
                the smiles of parents, and the sparkle of hope reminded us why
                we do what we do. Project Love in Action wasn’t just about
                Christmas it was about creating moments of belonging that last
                far beyond the season.
              </p>
              <a href="/programs/other" className="program-btn">
                View Program
              </a>
            </div>
          </div>

          <div className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${domestic})` }}
            >
              <div className="program-overlay-title">Domestic Program</div>
            </div>
            <div className="program-details">
              <h3>PROJECT MAKE A DIFFERENCE - Lagos, Nigeria (July 2024)</h3>
              <p>
                Project Make a Difference – Modupe Cole Outreach In July 2024,
                Kids Dream Haven Foundation took a step closer to its mission of
                touching lives with compassion by visiting Modupe Cole Memorial
                Child Care & Treatment Home School in Lagos a safe haven for
                children living with disabilities. With hearts full of love, our
                team came bearing essentials carefully chosen to bring comfort
                and joy, home cooked meals, school supplies, diapers,
                toiletries, and personal care items. But beyond the gifts, we
                shared laughter, conversations, and moments that reminded us
                that every child regardless of ability deserves to feel valued,
                loved, and supported. This wasn’t just an outreach it was a
                celebration of dignity, hope, and the belief that every child
                can thrive when surrounded by care and kindness. Project Make a
                Difference is our promise to continue standing beside vulnerable
                communities, one child at a time.
              </p>
              <a href="/programs/domestic" className="program-btn">
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
