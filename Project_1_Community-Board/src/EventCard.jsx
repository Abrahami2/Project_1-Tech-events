import React from 'react';

function EventCard({ title, description, imageUrl, url }) {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={title} className="event-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="view-button">View</a>
    </div>
  );
}

export default EventCard;
