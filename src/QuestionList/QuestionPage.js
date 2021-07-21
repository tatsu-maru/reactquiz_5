import React, { useState } from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { LikeButton } from './LikeButton';
import QuizComment from './QuizComment';

function QuestionPage({ QuestionLists }) {
  const [qLIsts, setqLists] = useState(QuestionLists)
  const inputAnswer = (selectedAnswer, targetIndex) => {
    setqLists(qLIsts.map((list, index) => (index === targetIndex ? { ...list, selectedAnswer } : list)))
  }

  return (
    <div>
      <header><Navbar /></header>
      {qLIsts.map(({ Question, Answers, Correct, selectedAnswer }, index) => {
        return (
          <div key={Question}>
            <h1>{Question}</h1>
            <div>
              {Answers.map((answer) => {
                return (
                  <button key={answer} onClick={() => inputAnswer(answer, index)}>
                    {answer}
                  </button>
                )
              })}
            </div>
            {selectedAnswer && <div>{Correct === selectedAnswer ? '正解' : '不正解'}</div>}
            <LikeButton />
          </div>
        )
      })}
      　<QuizComment />

    </div>
    
  )
}


QuestionPage.propTypes = {
  QuestionLists:PropTypes.func
}

export default QuestionPage; 