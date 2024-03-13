import "./styles.css";
import questions from "./constants/questions.json";
import { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  //keep all of logic in app.js
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {/* question component */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      ;{/* answer component */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}
