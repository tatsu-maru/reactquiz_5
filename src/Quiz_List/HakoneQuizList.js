import React from 'react';              
import Navbar from './Navbar';
//import HakoneQuizFrom1 from './Hakone_Quiz/HakoneQuizFrom1';
//import HakoneQuizB from './Hakone_Quiz/HakoneQuizB';
//import ListItem from '@material-ui/core/ListItem';
//import {Link} from 'react-router-dom';
//import QuizList from './QuizList';
//import Home from './Home'
//import ListItemText from '@material-ui/core/ListItemText';
import QuizList from './QuizList'
//import {Link} from 'react-router-dom';

class HakoneQuizList extends React.Component {   

    render() {                         
        return (
            <div>
                <header>
                <Navbar />
                </header>

            <section>
                <QuizList title="箱根駅伝クイズ一覧"
                          list="選手の出身大学1"
                          link="/HakoneQuizFrom1"
                          />
            </section>
  
            </div>
        );
    }
}

 
export default HakoneQuizList; 