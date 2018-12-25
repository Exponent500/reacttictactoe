import React from 'react';

import './App.css';
import Game from '../Game/Game';
import TopHeader from '../TopHeader/TopHeader';

const App = () => {
    return (
      <div>
        <header>
          <TopHeader></TopHeader>
        </header>
        <section>
          <Game />
        </section>
      </div>
    );
};

export default App;
