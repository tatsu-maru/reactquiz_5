import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home'
import ShingekiQuizList from './Quiz_List/ShingekiQuizList';
import ShingekiQuiz1  from './Shingeki_Quiz/ShingekiQuiz1'
//import Navbar from './Navbar';
import HakoneQuizList from './Quiz_List/HakoneQuizList';
import HakoneQuizFrom1 from './Hakone_Quiz/HakoneQuizFrom1';

class QuizApp extends Component{
    render(){
        return(
            <div>
             
              <section>
              <Router>
              <Route exact path='/' component={Home}/>
              <Route path='/HakoneQuizList' component={HakoneQuizList}/>
              <Route path='/HakoneQuizFrom1' component={HakoneQuizFrom1}/>
              <Route path='/ShingekiQuizList' component={ShingekiQuizList}/>
              <Route path='/ShingekiQuiz1' component={ShingekiQuiz1}/>

              </Router>
              </section>
        
            </div>
        )
    }
}

ReactDOM.render(
   
    <QuizApp/>,
    document.getElementById('root')
  )