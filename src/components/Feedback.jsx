import React from 'react';

// Feedback component to provide feedback on user's answer
const Feedback = ({ isCorrect, correctAnswer }) => {
  return (
    <div>
      {isCorrect ? <p>Õige vastus!</p> : <p>Vale vastus. Õige vastus on: '{correctAnswer}'.</p>}
    </div>
  );
};

export default Feedback;