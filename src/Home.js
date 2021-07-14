import React from 'react';              //Reactを読み込んでいる
import Navbar from './Navbar';
//import QuizList from './QuizList';
class Home extends React.Component {   //page1クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <header>
           <Navbar />
          
                </header>
                <section>
            ホーム画面です
            
            </section>
            </div>
        );
    }
}
 
export default Home; 