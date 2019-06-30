import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App =props =>{
  
  const[chosenSelectedCharatere, setSelectedCharatere]=useState(1);
  const[chosenSide, setSide]=useState('light');
  const[chosenDestroyed, setDestroyed]=useState(false);

  const sideHandler = side => {
    setSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharatere(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  
    let content = (
      <React.Fragment>
        <CharPicker
          side={chosenSide}
          selectedChar={chosenSelectedCharatere}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={chosenSelectedCharatere} />
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        {chosenSide === 'dark' && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );

    if (chosenDestroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;
  
}

export default App;
