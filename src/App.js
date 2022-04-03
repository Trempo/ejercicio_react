import './App.css';
import Museums from './components/Museums';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import MuseumDetail from './components/MuseumDetail';

const App = () => {
  const [selectedMuseum, setSelectedMuseum] = useState(null);

  const handleDetail = (museum) => {
    setSelectedMuseum(museum);
  };
  return (
    <div className="App">
      <Navbar onHome={() => setSelectedMuseum(null)} />
      <div className="container">
        <h5 className="mt-3 mb-3">
          {' '}
          <a
            onClick={() => {
              setSelectedMuseum(null);
            }}>
            Home
          </a>{' '}
          {selectedMuseum ? '> Museum' : ''}
        </h5>
        <div className="divMuseos">
          {selectedMuseum ? (
            <h1>Museo {selectedMuseum.name}: Obras principales</h1>
          ) : (
            <h1>MUSEOS</h1>
          )}
        </div>
        <hr className="linea" />
        {selectedMuseum ? (
          <MuseumDetail selectedMuseum={selectedMuseum.artworks} />
        ) : (
          <Museums handleDetail={handleDetail} />
        )}
      </div>
    </div>
  );
};

export default App;
