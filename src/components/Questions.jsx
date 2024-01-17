import React, { useState } from 'react';
import Answers from './Answers';
import Feedback from './Feedback';
import Score from './Score';
import quizData from './quizData';

// Questions component managing quiz flow and feedback
const Questions = () => {
  // State hooks for managing quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false); // New state

  // Quiz data
  const questions = quizData;
  const currentQuestion = questions[currentQuestionIndex];

  // Handle user's answer
  const handleAnswer = (selectedAnswer) => {
    if (!showFeedback) {
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      setScores((prevScores) => [...prevScores, isCorrect ? 1 : 0]);
      setFeedback(isCorrect);
      setSelectedAnswer(selectedAnswer);
      setShowFeedback(true);
    } else {
      setShowFeedback(false);
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentQuestionIndex(questions.length);
    }
  };

  // Render the quiz content
  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <>
          <h2>Küsimus {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.question}</p>
          <Answers
            question={currentQuestion}
            handleAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
          />
          {showFeedback && <Feedback isCorrect={feedback} correctAnswer={currentQuestion.correctAnswer}
          />}
          <button
            onClick={handleNextQuestion}
            disabled={!showFeedback}
            style={{display: selectedAnswer === null ? 'none' : 'inline'}}
          >
            Edasi
          </button>
        </>
      ) : (
        <Score scores={scores}/>
      )}
    </div>
  );
};

export default Questions;