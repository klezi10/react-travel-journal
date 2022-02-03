import React from 'react';

export default function Card(props) {
  return (
    <div className="Card">
      <img
        src={props.item.imageUrl}
        alt={props.item.title}
        className="travel-img"
      />
      <div className="travel-text">
        <div className="location-info">
          <img
            src="../Images/pin-location.png"
            alt="pin location"
            className="pin-location"
          />
          <p className="country-location">{props.item.location}</p>
          <p className="google-maps-url">
            <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>{' '}
          </p>
        </div>
        <h1>{props.item.title}</h1>
        <p className="travel-dates">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="description-text">
          {props.item.description}{' '}
          <a href={props.item.directLink} target="_blank" rel="noreferrer">
            continue...
          </a>
        </p>
      </div>
    </div>
  );
}
