import './App.css';
import React from 'react';
import Questions from './components/Questions';
import './styles.css';

// Render the main quiz container with the Questions component
const App = () => {
  return (
    <div className="quiz">
      <Questions />
    </div>
  );
};

export default App;