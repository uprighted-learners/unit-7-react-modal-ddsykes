import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';

const App = () => {
  const [modalState, setModalState] = useState(false);

  const handleClick = () => {
    setModalState(prevState => !prevState);
  };

return(
  <main>
  <button onCLick={handleClick}>Open Modal</button>
  <p>This is placeholder text</p>
  <Modal modalState={modalState} handleClick={handleClick}/>
  </main>
)
}

export default App;
