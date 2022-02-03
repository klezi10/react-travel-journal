import React from 'react';

export default function Card(props) {
  console.log(props);
  return (
    <div className="Card">
      <img src={props.imageUrl} alt={props.title} className="travel-img" />
      <div className="travel-text">
        <div className="location-info">
          <img
            src="../Images/pin-location.png"
            alt="pin location"
            className="pin-location"
          />
          <p className="country-location">{props.location}</p>
          <p className="google-maps-url">
            <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>{' '}
          </p>
        </div>
        <h1>{props.title}</h1>
        <p className="travel-dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description-text">
          {props.description}{' '}
          <a href={props.directLink} target="_blank" rel="noreferrer">
            continue...
          </a>
        </p>
      </div>
    </div>
  );
}
