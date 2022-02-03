import React from 'react';
import './style.css';
import Header from '../src/Components/Header';
import Card from '../src/Components/Card';
// import data from './data';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Card
        title="Biblioteca Palafoxiana"
        location="Mexico"
        googleMapsUrl="https://goo.gl/maps/5euLHajVDo1WjNLu7"
        startDate="3 Feb, 2020"
        endDate="4 Feb, 2020"
        description="The Biblioteca Palafoxiana is a library in Puebla City's historic centre, in the Mexican state of Puebla. Founded in 1646, it is recognized by the UNESCO for being the first and oldest public library in the Americas, It has more than 45,000 books and manuscripts, ranging from the 15th to the 20th century."
        imageUrl="../Images/biblioteca.jpg"
      />
    </div>
  );
}
