import React from 'react';
import './style.css';
import Header from '../src/Components/Header';
import Card from '../src/Components/Card';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Header />
      {cards}
      <footer className="footer">
        Coded by{' '}
        <a
          href="https://clever-turing-3f9e94.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Klesta Luli
        </a>
        |{' '}
        <a
          href="https://github.com/klezi10/react-travel-journal"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Open-source
        </a>
      </footer>
    </div>
  );
}
