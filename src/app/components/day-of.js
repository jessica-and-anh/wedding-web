import React, { Component } from 'react';
import '../../stylesheets/components/day-of.css';

import map from '../../images/map.png';
import golf from '../../images/golf.png';
import calendar from '../../images/calendar.png';

class WeddingWeekend extends Component {

  render() {
    return (
      <section className="day-of">
        <header>THE WEDDING WEEKEND</header>
        <p className="day-of-text">
          Our wedding is a destination wedding.
          We invite everyone to come spend Labor Day Weekend with us, from Saturday, 9/2 to Monday, 9/4.
          Since the venue is located north of Tahoe, there are various activites to do, so come prepared to have a relaxing outdoor getaway!
        </p>
        <div className="day-of-content">
          <div className="day-of-item">
            <h3>WHERE</h3>
            <img src={map} className="day-of-pic" alt="Wedding weekend map" />
            <p className="day-of-title">CHALET VIEW LODGE</p>
            <p className="day-of-desc">
              72056 CA-70
              <br />
              Portola, CA 96122
            </p>
          </div>
          <div className="day-of-item">
            <h3>WHAT</h3>
            <img src={golf} className="day-of-pic" alt="Wedding weekend activities" />
            <p className="day-of-title">ACTIVITIES</p>
            <ul className="day-of-desc">
              <li>Golf, swimming,</li>
              <li>hiking, field games,</li>
              <li>bocce ball, hot tub,</li>
              <li>volleyball, basketball,</li>
              <li>brewery, and more!</li>
            </ul>
          </div>
          <div className="day-of-item">
            <h3>WHEN</h3>
            <img src={calendar} className="day-of-pic" alt="Wedding weekend calendar" />
            <p className="day-of-title">LABOR DAY WEEKEND</p>
            <p className="day-of-desc">
              9/2/2017 - 9/4/2017
              <br />
              Saturday, 4:00 PM
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default WeddingWeekend;
