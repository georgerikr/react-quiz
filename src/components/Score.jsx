import React from 'react';

// Component to display quiz scores and personalized message
const Score = ({ scores }) => {
  const totalScore = scores.reduce((acc, score) => acc + score, 0);

  // Render the score table and personalized message
  return (
    <div>
      <h2>Viktoriin läbi!</h2>
      <table>
        <thead>
          <tr>
            <th>Küsimus</th>
            <th>Tulemus</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>Küsimus {index + 1}</td>
              <td>{score}/1</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Kokku</td>
            <td>{totalScore}/3</td>
          </tr>
        </tfoot>
      </table>
      <p>{getPersonalizedMessage(totalScore)}</p>
    </div>
  );
};

// Generate a personalized message based on the total score
const getPersonalizedMessage = (totalScore) => {
  if (totalScore === 3) {
    return 'Väga tubli!';
  } else if (totalScore === 2) {
    return 'Tubli!';
  } else if (totalScore === 1) {
    return 'Saab ka paremini.';
  } else if (totalScore === 0) {
    return 'Proovi uuesti.';
  }
};

export default Score;
