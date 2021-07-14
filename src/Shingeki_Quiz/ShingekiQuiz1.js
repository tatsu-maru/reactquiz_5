import React, { useState } from 'react'
import Navbar from './Navbar';
const QuestionLists = [
  {
    Question: '1.この中で同期でないのは',
    Answers: ['エレン', 'ジャン', 'オルロ', 'マルコ'],
    Correct: 'オルロ',
    selectedAnswer: ''
  },
  {
    Question: '2.3つの壁の名前で正しくないのは?',
    Answers: ['ウォール・マリア', 'ウォール・シーナ', 'ウォール・ローゼ', 'ウォール・アテナ'],
    Correct: 'ウォール・アテナ',
    selectedAnswer: ''
  },


]

export default function App() {
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
          </div>
        )
      })}
    </div>
  )
}