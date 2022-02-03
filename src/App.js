import React from 'react';
import './style.css';
import Header from '../src/Components/Header';
import Card from '../src/Components/Card';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}
