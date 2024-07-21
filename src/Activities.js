import React from 'react';
import './Activities.css';
import photo1 from './Photo/p4.webp';
import photo2 from './Photo/p5.webp';
import photo3 from './Photo/p6.webp';
import photo4 from './Photo/p7.jpg';
import photo5 from './Photo/p8.jpg';
import photo6 from './Photo/p9.webp';

const activitiesData = [
  {
    image: photo1,
    text: 'Toronto International Student Offline Party',
    buttonText: 'Join now',
  },
  {
    image: photo2,
    text: 'Canada Day Party',
    buttonText: 'Join now',
  },
  {
    image: photo3,
    text: 'Applying to Canadian Schools Online Workshop',
    buttonText: 'Join now',
  },
  {
    image: photo4,
    text: 'Banff National Forest Park Tours',
    buttonText: 'Join now',
  },
  {
    image: photo5,
    text: 'Recognizing Plants in Nature',
    buttonText: 'Join now',
  },
  {
    image: photo6,
    text: 'Recognizing Animals in Nature',
    buttonText: 'Join now',
  },
];

const Activities = () => {
    return (
      <div className="activities-container">
        <h2>Activities</h2>
        <p>We're hosting a few events right now and would love to have you join us!</p>
        <br></br>
        <div className="activities-grid">
          {activitiesData.map((activity, index) => (
            <div key={index} className="activity-item">
              <img src={activity.image} alt={`Activity ${index + 1}`} />
              <div className="activity-text">
                <input type="text" aria-label="Activities name" value={activity.text} readOnly />
                <button>{activity.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Activities;
