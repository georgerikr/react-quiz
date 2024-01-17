import React from 'react';

// Answers component to display and handle user answers
const Answers = ({ question, handleAnswer, selectedAnswer, showFeedback }) => {
  const { answers, correctAnswer } = question;
  const handleOptionClick = (answer) => {
    if (!showFeedback) {
      handleAnswer(answer);
    }
  };

  // Render the list of answer options
  return (
    <ul>
      {answers.map((answer, index) => (
        <li
          key={index}
          onClick={() => handleOptionClick(answer)}
          style={{
            color: showFeedback &&
            (selectedAnswer === answer ? (answer === correctAnswer ? '#4dc14d' : '#ff5252') : ''),
            pointerEvents: showFeedback ? 'none' : 'auto',
          }}
        >
          {answer}
        </li>
      ))}
    </ul>
  );
};

export default Answers;