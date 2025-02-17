//import { PinDropSharp } from '@material-ui/icons';
import React from 'react'
//import Navbar from './Navbar';
import QuestionPage from './QuestionPage'

const  HakoneQuizFrom1Lists= [
  {
    Question: '1.早稲田大学出身の選手は?',
    Answers: ['大迫傑選手', '服部勇馬選手', '中村匠吾選手', '相澤晃選手'],
    Correct: '大迫傑選手',
    selectedAnswer: ''
  },
  {
    Question: '2.東洋大学出身の選手は?',
    Answers: ['佐藤悠基選手', '服部勇馬選手', '中村匠吾選手', '伊藤達彦選手'],
    Correct: '服部勇馬選手',
    selectedAnswer: ''
  },
  {
    Question: '3.駒澤大学出身の選手は?',
    Answers: ['塩尻和也選手', '竹澤健介選手', '中村匠吾選手', '相澤晃選手'],
    Correct: '中村匠吾選手',
    selectedAnswer: ''
  },
  {
    Question: '4.東海大学出身の選手は?',
    Answers: ['館沢亨次選手', '神野大地選手', '中村匠吾選手', '相澤晃選手'],
    Correct: '館沢亨次選手',
    selectedAnswer: ''
  },
  {
  Question: '5.青山学院大学出身の選手は?',
  Answers: ['館沢亨次選手', '一色恭志選手', '村山謙太選手', '村山紘太選手'],
  Correct: '一色恭志選手',
  selectedAnswer: ''
}

]
export default function HakoneQuizFrom1() {
  return <QuestionPage QuestionLists={HakoneQuizFrom1Lists} />;
}
