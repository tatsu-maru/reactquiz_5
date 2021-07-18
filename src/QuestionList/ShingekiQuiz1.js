import React from 'react'
import QuestionPage from './QuestionPage'

const ShingekiQuestion1Lists = [
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

export default function ShingekiQuiz1() {
  return <QuestionPage QuestionLists={ShingekiQuestion1Lists} />;
}
