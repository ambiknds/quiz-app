export default function Result({ userAnswers, questions, resetQuiz }) {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="result">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}.{question.question}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
