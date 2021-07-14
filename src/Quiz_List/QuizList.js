import React from 'react';              
//import Navbar from './Navbar';
//import HakoneQuizFrom1 from './Hakone_Quiz/HakoneQuizFrom1';
//import HakoneQuizB from './Hakone_Quiz/HakoneQuizB';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
//import QuizList from './QuizList';
//import Home from './Home'
 import ListItemText from '@material-ui/core/ListItemText';
//import HakoneQuiz from './HakoneQuiz';
import PropTypes from 'prop-types'
//import { Button } from '@material-ui/core';

const QuizList = (props) =>{  


                         
        return (
            <div>
               
                <section>
        
              <ul>
              <h1>{props.title}</h1>
              <Link to={props.link}>

              {[props.list].map((text) => (
         
         <ListItem link button key={text} >
        
           <ListItemText primary={text} />
          
         </ListItem>
         
       ))}
               </Link>
              </ul>

          </section>
 
            </div>
        );
    }
QuizList.propTypes = {
    title :PropTypes.func,
    list :PropTypes.func,
    link :PropTypes.string
}
 
export default QuizList; 