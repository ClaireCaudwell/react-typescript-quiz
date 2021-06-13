import React, { useState } from 'react';

import { fetchQuizQuestions } from "./API";

// components
import QuestionCard from "./components/QuestionCard";
import { GlobalStyles, Wrapper } from "./App.styles";

// types
import { QuestionState, Difficulty } from "./API";

// types for when the userAnswers state is populated
export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string,
};

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [ loading, setLoading ] = useState(false);
  const [ questions, setQuestions ] = useState<QuestionState[]>([]);
  const [ number, setNumber ] = useState(0);
  const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([]);
  const [ score, setScore ] = useState(0);
  const [ gameOver, setGameOver ] = useState(true);

  console.log(questions);
  console.log(number);

  // function triggered when user starts the quiz
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check user answer to the correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if(correct) setScore(prev => prev +1);
      // save the answer in the array of user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // move onto the next question if not the last
    const nextQuestion = number +1;
    // total questions will always be one question ahead as we're adding 1
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  // function triggered when user selects an answer
  return (
    <>
    <GlobalStyles />
      <Wrapper>
        <h1>General knowledge Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start quiz
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {!loading && !gameOver && (
          <QuestionCard 
            questionNr={number +1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number +1 && number !== TOTAL_QUESTIONS -1 ? (
          <button className="next" onClick={nextQuestion}>Next question</button>
        ): null}
      </Wrapper>
    </>
    
  );
}

export default App;
