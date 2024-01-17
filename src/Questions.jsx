// Questions.js
import React from 'react';
import Answers from './components/Answers'; // Importi vastuste komponent

const Questions = ({ questions, handleAnswer }) => {
  return (
    <div>
      <h2>Küsimus</h2>
      {/* Kuvame küsimuse */}
      <p>{questions.question}</p>
      
      {/* Lisame vastuste komponendi ja edastame küsimuse vastustega */}
      <Answers answers={questions.answers} handleAnswer={handleAnswer} />
    </div>
  );
};

export default Questions;
